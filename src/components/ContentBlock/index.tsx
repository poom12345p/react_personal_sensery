import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

   const navigate = useNavigate();

  const handleClick = (link:string) => {
    navigate(link);
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="center"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col  xs={24} sm={24} md={20} lg={16} xl={14}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
            
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          link?: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() =>item.link && handleClick(item.link)}
                          >
                            {item.title}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>

            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
