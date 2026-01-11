import { lazy } from "react";
import ResultBlock from "../../components/ResultBlock";
import { useLocation } from 'react-router-dom';
const Container = lazy(() => import("../../common/Container"));
const Result = () => {
  const location = useLocation();
  const { survey, key }  = location.state || {}; 
    console.log("survey:", survey);
  console.log("surveyId:", key);
  return (
    <Container>
      <ResultBlock survey={survey}  STORAGE_KEY ={ key}/>
    </Container>
  );
};

export default Result;