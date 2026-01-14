import { useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Table, Typography, Radio, Card,Spin } from "antd";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import MultiSeriesRadar from "../../common/RadarChart"
import Metrics from "../../content/Metrics.json"
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
  const [loading, setLoading] = useState(true);
 console.log(  STORAGE_KEY);

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

    setResult(calculated);
  } catch (e) {
    console.error("Failed to parse saved answers", e);
  } finally {
    setLoading(false);
  }
}, [survey, STORAGE_KEY]);

  const getScoreResult =(ans) => {
    console.log("ans",ans);
  if (!Object.keys(ans).length) return {};

    let result = {};

  survey.Assessment.forEach((system) => {
    const assessmentResult = {};

    system.children.forEach((child) => {
      let childScore = 0;
      const childMax = child.questions.length * 4;

      child.questions.forEach((q) => {
        const value =
          ans?.[system.id]?.[child.id]?.[q.id] ?? 0;
        childScore += value-1;
      });

      assessmentResult[child.id] = {
        label:child.id,
        score: childScore,
        maxScore: childMax,
        data: Math.round((childScore / childMax) * 100),
      };
    });


    result[ system.id] =  assessmentResult;

  });
  console.log( result);
console.log( Metrics.Metricskey);
  const getOrderedData = (result, metricsKey, type) =>
  metricsKey.map((systemId) => {
    const system = result?.[systemId];
    if (!system) return 0;

    const key = Object.keys(system).find(k => k.includes(type));
    return system[key]?.data ?? 0;
  });

  const preferenceData = getOrderedData(result, Metrics.Metricskey, "preferences");
  const arousalData    = getOrderedData(result, Metrics.Metricskey, "arousals");
    const series = [
  { label: "Preferences",color: "#1daf00", data: preferenceData },
  { label: "Arousals",color: "#b61a1a", data: arousalData },
];
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

  return (
    <ContentSection>
      <Fade triggerOnce>
        <HeadderTitle>{survey.title}</HeadderTitle>
        <p className="text-gray-600 mb-8">Target age: {survey.targetAge}</p>
        <MultiSeriesRadar dataSeries={result} metrics={Metrics.Metrics} />
        <ButtonWrapper>
          < Button
          onClick={()=>navigate(`/${survey.id}`)}
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