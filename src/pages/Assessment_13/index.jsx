import { lazy } from "react";
import AssessmentContent from "../../content/Assessment_13.json";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const AssessmentBlock= lazy(() => import("../../components/AssessmentBlock"));

const Assessment_13= () => {
  return (
    <Container>
      <AssessmentBlock
       survey={ AssessmentContent.survey}
      />
    </Container>
  );
};

export default Assessment_13
