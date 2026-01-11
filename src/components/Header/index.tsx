import { useState } from "react";
import { Row, Col, Drawer } from "antd";
//import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Link } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LogoText,
} from "./styles";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {

    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall>
          <Span>About</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>Contact</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection id ="intro">
      <Container>
        <Row justify="space-between">
            <LogoText as={Link} to="/">Personal Sensory</LogoText>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
