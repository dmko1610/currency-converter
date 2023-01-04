import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

const EUR = (props) => (
  <Svg
    viewBox="0 0 640 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M4 4h640v480H4z" />
    <Path stroke="#000" strokeWidth={4} d="M2 2h644v484H2z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.00156 .00208)" />
      </Pattern>
      <Image
        id="b"
        width={640}
        height={480}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default EUR;
