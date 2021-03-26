import React from "react";
import { Anchor, Box, Text, ResponsiveContext } from "grommet";
import Logo from './Logo';
import  SocialMedia  from './Socialmedia';
import Slider from './Slider'

const Startpage = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction="row"
        justify="between"
        alignSelf="center"
        gap="medium"
        pad={{ top: "large", horizontal: "xlarge" }}
      >
        <Anchor
          href="/"
          icon={<Logo />}
          color="black"
          label={
            size !== "xsmall" &&
            size !== "small" && <Text size="large">App Teaser</Text>
          }
        />
        <SocialMedia />
        <Slider/>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export default Startpage;
