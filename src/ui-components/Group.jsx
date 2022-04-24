/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Group(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="132px"
      height="132px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 132, height: 132 }}
      paths={[
        {
          d: "M132 66C132 102.451 102.451 132 66 132C29.5492 132 0 102.451 0 66C0 29.5492 29.5492 0 66 0C102.451 0 132 29.5492 132 66Z",
          fill: "rgba(24,160,251,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M26.9019 4.5C28.0566 2.5 30.9434 2.5 32.0981 4.5L52.4497 39.75C53.6044 41.75 52.161 44.25 49.8516 44.25L9.14841 44.25C6.83901 44.25 5.39563 41.75 6.55033 39.75L26.9019 4.5Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(71.97%, 27.27%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Group")}
    ></Icon>
  );
}
