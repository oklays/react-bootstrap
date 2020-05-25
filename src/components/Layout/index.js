import React from "react";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default Layout;
