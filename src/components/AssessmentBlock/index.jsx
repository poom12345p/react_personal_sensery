import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Table, Typography, Radio, Card } from "antd";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import Choices from "../../content/Choices.json"
const { Title, Text } = Typography;
import {
  ContentSection,
  ButtonWrapper,
  HeadderTitle,
  MainTitle,
  SubTitle,
  AssessmentCard,
  PurpleRadioButton,
  PurpleRadioGroup
} from "./styles";

const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
  });
};

const LikertRadio = ({ value, scaleReversed, onChange }) => (

  <PurpleRadioGroup 
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {(scaleReversed === true ? Choices.low : Choices.high).map((v) => (
      <PurpleRadioButton key={v.text} value={v.value}>{v.text}</PurpleRadioButton>
    ))}
  </PurpleRadioGroup>
);


// const AssessmentBlock = () => {
//           return (
//     <div>
//       <h6>Hello</h6>
//     </div>
//   );

// }

const QuestionRow = ({ question, savedData, scaleReversed, onChange }) => {
  return (
    <Card id={question.id} style={{ marginBottom: 16 }}>
      <Typography.Text strong>
        {question.text}
      </Typography.Text>

      <LikertRadio
        value={savedData?.[question.id]}
        scaleReversed={scaleReversed}
        onChange={onChange}
      />
    </Card>
  );
}

const AssessmentBlock = ({ survey }) => {

  const [answers, setAnswers] = useState({});

  const STORAGE_KEY = survey.id;
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved answers", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers]);

  const setAnswer = (systemId, childId, questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [systemId]: {
        ...prev[systemId],
        [childId]: {
          ...prev[systemId]?.[childId],
          [questionId]: value
        }
      }
    }));
  };


  const clearAnswers = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAnswers({});
    scrollTo("intro");
  };


  const columns = (systemId, childId, scaleReversed) => [
    {
      title: "ข้อ",
      dataIndex: "id",
      key: "id",
      width: 60,
    },
    {
      title: "คำถาม",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "คะแนน",
      key: "score",
      width: 480,
      render: (_, record) => (
        <LikertRadio
          value={answers?.[systemId]?.[childId]?.[record.id] || null}
          scaleReversed={scaleReversed}
          onChange={(v) => setAnswer(systemId, childId, record.id, v)}
        />
      ),
    },
  ];




  const isAllAnswered = (survey, answers) => {
    return survey.Assessment.every((assessment) =>
      assessment.children.every((child) =>
        child.questions.every(
          (q) => {
            var ans = answers?.[assessment.id]?.[child.id]?.[q.id] != null
            if (!ans) {
              
              console.log(
                "missing answer at",
                assessment.id,
                child.id,
                q.id
              );
              scrollTo(q.id);
            }
            return ans;
          }
        )
      )
    );
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("Assessment Result", answers);
    if (isAllAnswered(survey, answers))
      navigate("/result", { state: { survey: survey, key: survey.id } });
    else
      alert("Please complete all assessment!");
  };
  return (
    <ContentSection>
      <Fade triggerOnce>
        <HeadderTitle>{"แบบประเมินความต้องการรับรู้ประสาทสัมผัส"}</HeadderTitle>
        <p className="text-gray-600 mb-8">Target age: {survey.targetAge}</p>


        {survey.Assessment.map((system) => (
          <div key={system.id} className="mb-10">
            < AssessmentCard title={system.title} style={{ marginBottom: 36 }}>

              {system.children.map((child) => {

                return (
                  <div key={child.id} className="mb-8">

                    {child.questions.map((q) => {

                      return (
                        <QuestionRow
                          key={q.id}
                          question={q}
                          savedData={answers?.[system.id]?.[child.id]}
                          scaleReversed={child.scaleReversed}
                          onChange={(v) => setAnswer(system.id, child.id, q.id, v)}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </ AssessmentCard>
          </div>
        ))}

        <ButtonWrapper>
          < Button
            color="#ff0037"
            onClick={clearAnswers}
          >
            Reset
          </Button>

          < Button
            onClick={handleSubmit}
          >
            Next
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

export default AssessmentBlock;