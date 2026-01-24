import { useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Table, Typography, Radio, Card, Spin } from "antd";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import MultiSeriesRadar from "../../common/RadarChart"
import Metrics from "../../content/Metrics.json"
import Choics from "../../content/Choices.json"
import Critirion from "../../content/Critirion.json"
const { Title, Text } = Typography;
import {
  ContentSection,
  ButtonWrapper,
  HeadderTitle,
  MainTitle,
  SubTitle,
  AssessmentCard,
  PurpleRadioGroup,
} from "./styles";




// const AssessmentBlock = () => {
//           return (
//     <div>
//       <h6>Hello</h6>
//     </div>
//   );

// }

const ResultBlock = ({ survey, STORAGE_KEY }) => {


  const [result, setResult] = useState({});
   const [graphSeries, setSeries] = useState({});
  const [loading, setLoading] = useState(true);
  const [preferenceData, setpreferenceData] = useState([]);
  const [arousalsData, setarousalsData] = useState([]);
  console.log(STORAGE_KEY);

  useEffect(() => {
    console.log("ResultBlock mounted");

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setLoading(false);
      return;
    }

    try {
      const parsedAnswers = JSON.parse(saved);
      console.log("loaded answers", parsedAnswers);

      const calculated = getScoreResult(parsedAnswers);
      console.log("calculated result", calculated);

    setSeries(calculated);
    } catch (e) {
      console.error("Failed to parse saved answers", e);
    } finally {
      setLoading(false);
    }
  }, [survey, STORAGE_KEY]);

  const buildSortedList = (seriesItem) => {
    return seriesItem
      .map((pair) => ({
        label: pair.label,
        data: pair.data,
      }))
      .sort((a, b) => b.data - a.data); // 🔥 most → least
  };

  const calcriterion = (data)=>
  {
    if(data < 25)
    {
      return "low"
    }
    else if(data >= 25 && data<75)
    {
      return "mid"
    }
    else
    {
      return "high"
    }
  }

  const getScoreResult = (ans) => {

    if (!Object.keys(ans).length) return {};

    let result = {};

    survey.Assessment.forEach((system) => {
      const assessmentResult = {};

      system.children.forEach((child) => {
        let childScore = 0;
        const childMax = child.questions.length * Choics.max;

        child.questions.forEach((q) => {
          const value =
            ans?.[system.id]?.[child.id]?.[q.id] ?? 0;
          childScore += value;
        });

        const percent=Math.round((childScore / childMax) * 100);

        assessmentResult[child.id] = {
          label: child.id,
          score: childScore,
          maxScore: childMax,
          data:  percent,
          critirion: calcriterion( percent)
        };
      });


      result[system.id] = assessmentResult;

    });
    const getOrderedData = (result, metricsKey, type) =>
      metricsKey.map((systemId) => {
        const system = result?.[systemId.key];
        if (!system) return 0;

        const key = Object.keys(system).find(k => k.includes(type));
        return system[key]?.data ?? 0;
      });
  const tableData = Metrics.Metrics.map((m) => ({
    key: m.key,
    system: m.label,
    preferences: { value : result?.[m.key]?.preferences?.data ?? 0,
      critirion : result?.[m.key]?.preferences?.critirion ??""
    },
    arousals: { value : result?.[m.key]?.arousals?.data ?? 0,
       critirion : result?.[m.key]?.arousals?.critirion ??""
    },
    result : Critirion?.[ result?.[m.key]?.arousals?.critirion]?.[result?.[m.key]?.preferences?.critirion] ?? ""
  }));
  
      setResult(tableData);
    const preferenceData = getOrderedData(result, Metrics.Metrics, "preferences");
    const arousalsData = getOrderedData(result, Metrics.Metrics, "arousals");

    const series = [
      { label: "Preferences", color: "#1daf00", data: preferenceData },
      { label: "Arousals", color: "#b61a1a", data: arousalsData },
    ];
const metricMap = Object.fromEntries(
  Metrics.Metrics.map(m => [m.key, m.label])
);

console.log(metricMap)
console.log(Object.entries(result))
    let prefRankingData = Object.entries(result).map(
      ([systemId, systemData]) => ({
        label: metricMap[systemId] ?? systemId,
        data: systemData?.preferences?.data ?? 0,
        critirion:  systemData?.preferences?.critirion?? "0"
      })
    );

    let arousalsRankingData = Object.entries(result).map(
      ([systemId, systemData]) => ({
        label: metricMap[systemId] ?? systemId,
        data: systemData?.arousals?.data ?? 0,
        critirion:  systemData?.preferences?.critirion?? "0"
      })
    );
    prefRankingData = buildSortedList(prefRankingData);
    arousalsRankingData = buildSortedList(arousalsRankingData);
    console.log(prefRankingData)
    setpreferenceData(prefRankingData)
    setarousalsData(arousalsRankingData)

    return series;
  };

  const navigate = useNavigate();
  if (loading) {
    return (
      <ContentSection style={{ textAlign: "center", paddingTop: 80 }}>
        <Spin size="large" />
      </ContentSection>
    );
  }

const columns = [
  {
    title: "System",
    dataIndex: "system",
    key: "system",
    fixed: "left",

  },
  {
    title: "Preferences",
    dataIndex: "preferences",
    key: "preferences",
    render: (value) =>  `${value.value}%`,
    sorter: (a, b) => a.preferences.value - b.preferences.value,
  },
  {
    title: "Arousals",
    dataIndex: "arousals",
    key: "arousals",
    render: (value) => `${value.value}%`,
    sorter: (a, b) => a.arousals.value - b.arousals.value,
  },
   {
    title: "Result",
    dataIndex: "result",
    key: "result",
    responsive: ['xs', 'sm', 'md', 'lg'],
    render: (value) => `${value}`,
  },
];

  return (
    <ContentSection>
      <Fade triggerOnce>
        <MainTitle> {survey.resulttitle}</MainTitle>
        <MultiSeriesRadar dataSeries={graphSeries} metrics={Metrics.Metrics.map((m)=>m.label)} />

        {/* <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card
              title="Preferences"
              style={{ borderRadius: 16 }}
            >
              {preferenceData.map((item) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span>{item.label} {item.data}%</span>
                </div>
              ))}
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title="Arousals"
              style={{ borderRadius: 16 }}
            >
              {arousalsData.map((item) => {
                
  return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                 <span>{item.label} {item.data}%</span>
                </div>
              )})};

            </Card>
          </Col>
        </Row> */}

        <Table
  columns={columns}
  dataSource={result}
  pagination={false}
  bordered
  size="small"
  scroll={{ x: 400 }}
/>

        <ButtonWrapper>
          < Button
            onClick={() => navigate(`/${survey.id}`)}
          >
            Edit
          </Button>
        </ButtonWrapper>

      </Fade>
    </ContentSection>
  );
  //       return (
  //     <div>
  //       <h6>Hello</h6>
  //     </div>
  //   );
}

export default ResultBlock;