/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="130px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Button")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(24,160,251,1)"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Montserrat"
        fontSize="15px"
        fontWeight="500"
        color="rgba(24,160,251,1)"
        lineHeight="17.578125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="-0.07px"
        position="absolute"
        top="27.5%"
        bottom="27.5%"
        left="32.31%"
        right="32.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Log in"
        {...getOverrideProps(overrides, "Log in")}
      ></Text>
    </View>
  );
}
