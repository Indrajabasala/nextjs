import React, { Component } from "react";
import { render } from "react-dom";
import Features from './Features';
import Footer from './Footer';
import Startpage from './Startpage';
import Section from './Section';
import Sign from './Sign';
import Slider from './Slider';
import Talents from './Talent';

// import {
//   Features,
//   Footer,
//   InstaXtreme,
//   Startpage,
//   Section,
//   Sign,
//   Slider,
//   Talents
// } from "./components";

// import { customTheme } from "./theme";

import { Box, Grommet } from "grommet";

class All extends Component {
  render() {
    return (
      <Grommet    full>
        <NavHeader />
        <Slider />
        <Box align="center" pad="large">
          <InstaXtreme size="xlarge" />
          <Sign />
          <Features />
        </Box>
        <Talents />
        <Section>
          <Footer />
        </Section>
      </Grommet>
    );
  }
}

export default  Startpage
