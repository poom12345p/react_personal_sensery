import { lazy } from "react";
import AssessmentContent from "../../content/Assessment_3_12.json";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const AssessmentBlock= lazy(() => import("../../components/AssessmentBlock"));

const Assessment_3_12 = () => {
  return (
    <Container>
      <AssessmentBlock
       survey={ AssessmentContent.survey}
      />
    </Container>
  );
};

export default Assessment_3_12;
