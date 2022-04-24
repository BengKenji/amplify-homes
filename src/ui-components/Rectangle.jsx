/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Rectangle(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="840px"
      height="960px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 840, height: 960 }}
      paths={[
        {
          d: "M-0.376288 0.329252L839.624 960.329L840.376 959.671L0.376288 -0.329252L-0.376288 0.329252ZM839.624 -0.329252L-0.376288 959.671L0.376288 960.329L840.376 0.329252L839.624 -0.329252ZM0 0L0 -1L-1 -1L-1 0L0 0ZM840 0L841 0L841 -1L840 -1L840 0ZM840 960L840 961L841 961L841 960L840 960ZM0 960L-1 960L-1 961L0 961L0 960ZM0 1L840 1L840 -1L0 -1L0 1ZM839 0L839 960L841 960L841 0L839 0ZM840 959L0 959L0 961L840 961L840 959ZM1 960L1 0L-1 0L-1 960L1 960Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 0L840 0L840 960L0 960L0 0Z",
          fill: "rgba(229,229,229,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Rectangle")}
    ></Icon>
  );
}
