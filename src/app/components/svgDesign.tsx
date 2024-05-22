import { gsap } from "gsap";
import * as React from "react";
import { SVGProps } from "react";
const SvgDesign = (props: SVGProps<SVGSVGElement>) => {
  React.useEffect(() => {}, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 1366 768"
      {...props}
    >
      <defs>
        <style>
          {
            "\n      .cls-1 {\n        fill: url(#linear-gradient-5);\n        filter: url(#drop-shadow-4);\n      }\n\n      .cls-2 {\n        fill: url(#linear-gradient);\n        filter: url(#drop-shadow-1);\n      }\n\n      .cls-3 {\n        fill: url(#New_Gradient_Swatch_1-2);\n        filter: url(#drop-shadow-5);\n      }\n\n      .cls-4 {\n        fill: url(#linear-gradient-6);\n        filter: url(#drop-shadow-6);\n      }\n\n      .cls-5 {\n        fill: url(#linear-gradient-4);\n        filter: url(#drop-shadow-3);\n      }\n\n      .cls-6 {\n        fill: url(#New_Gradient_Swatch_1);\n      }\n\n      .cls-7 {\n        fill: url(#linear-gradient-3);\n      }\n\n      .cls-8 {\n        fill: url(#linear-gradient-2);\n        filter: url(#drop-shadow-2);\n      }\n\n      .cls-9 {\n        fill: url(#linear-gradient-7);\n        filter: url(#drop-shadow-7);\n      }\n    "
          }
        </style>
        <linearGradient
          id="linear-gradient"
          x1={-152.11}
          y1={218.26}
          x2={129.17}
          y2={218.26}
          gradientTransform="translate(102.67 53.36) rotate(30)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.21} stopColor="#df63fd" />
          <stop offset={0.55} stopColor="#f95dff" />
          <stop offset={1} stopColor="#f95dff" />
        </linearGradient>
        <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
          <feOffset dx={7} dy={7} />
          <feGaussianBlur result="blur" stdDeviation={5} />
          <feFlood floodColor="#b448b7" floodOpacity={0.5} />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="linear-gradient-2"
          x1={1347.33}
          y1={117.39}
          x2={1633.28}
          y2={117.39}
          gradientTransform="translate(-506.48 -704.92) rotate(19.85) scale(1.47 1.09) skewX(-17.28)"
          xlinkHref="#linear-gradient"
        />
        <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
          <feOffset dx={7} dy={7} />
          <feGaussianBlur result="blur-2" stdDeviation={5} />
          <feFlood floodColor="#b448b7" floodOpacity={0.5} />
          <feComposite in2="blur-2" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="New_Gradient_Swatch_1"
          data-name="New Gradient Swatch 1"
          x1={-120.78}
          y1={499.26}
          x2={188.31}
          y2={499.26}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.02} stopColor="#0191ec" />
          <stop offset={1} stopColor="#6f7af5" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1={1225.72}
          y1={352.19}
          x2={1436.72}
          y2={352.19}
          gradientTransform="translate(-341.97 1408.59) rotate(-41.21) scale(1.57 1.03)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1={-174.34}
          y1={402.59}
          x2={258.06}
          y2={402.59}
          gradientTransform="translate(206.91 33.01) rotate(30)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.37} stopColor="#0191ec" />
          <stop offset={0.54} stopColor="#6f7af5" />
          <stop offset={0.83} stopColor="#6f7af5" />
        </linearGradient>
        <filter id="drop-shadow-3" filterUnits="userSpaceOnUse">
          <feOffset dx={-12} dy={31} />
          <feGaussianBlur result="blur-3" stdDeviation={18} />
          <feFlood floodColor="#29588c" floodOpacity={0.75} />
          <feComposite in2="blur-3" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="linear-gradient-5"
          x1={1061.59}
          y1={6.84}
          x2={1493.99}
          y2={6.84}
          gradientTransform="translate(180.69 -645.23) rotate(30)"
          xlinkHref="#linear-gradient-4"
        />
        <filter id="drop-shadow-4" filterUnits="userSpaceOnUse">
          <feOffset dx={-12} dy={31} />
          <feGaussianBlur result="blur-4" stdDeviation={18} />
          <feFlood floodColor="#29588c" floodOpacity={0.75} />
          <feComposite in2="blur-4" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="New_Gradient_Swatch_1-2"
          data-name="New Gradient Swatch 1"
          x1={-172.35}
          y1={585.59}
          x2={260.06}
          y2={585.59}
          gradientTransform="translate(298.68 56.37) rotate(30.01) skewX(.02)"
          xlinkHref="#New_Gradient_Swatch_1"
        />
        <filter id="drop-shadow-5" filterUnits="userSpaceOnUse">
          <feOffset dx={-12} dy={31} />
          <feGaussianBlur result="blur-5" stdDeviation={18} />
          <feFlood floodColor="#29588c" floodOpacity={0.75} />
          <feComposite in2="blur-5" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="linear-gradient-6"
          x1={1176.95}
          y1={244.31}
          x2={1641.95}
          y2={244.31}
          gradientTransform="translate(-616.26 -18.26) scale(1.57 1)"
          xlinkHref="#linear-gradient"
        />
        <filter id="drop-shadow-6" filterUnits="userSpaceOnUse">
          <feOffset dx={17} dy={1} />
          <feGaussianBlur result="blur-6" stdDeviation={5} />
          <feFlood floodColor="#3a2d3a" floodOpacity={0.5} />
          <feComposite in2="blur-6" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="linear-gradient-7"
          x1={1193.94}
          y1={324.84}
          x2={1658.94}
          y2={324.84}
          gradientTransform="translate(-1418.89 21.13) scale(2.13 1)"
          xlinkHref="#linear-gradient"
        />
        <filter id="drop-shadow-7" filterUnits="userSpaceOnUse">
          <feOffset dx={17} dy={1} />
          <feGaussianBlur result="blur-7" stdDeviation={5} />
          <feFlood floodColor="#3a2d3a" floodOpacity={0.5} />
          <feComposite in2="blur-7" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <rect
        className="cls-2"
        x={-204.74}
        y={180.26}
        width={313.02}
        height={76}
        rx={38}
        ry={38}
        transform="translate(-115.59 5.12) rotate(-30)"
      />
      <rect
        className="cls-8"
        x={1161.77}
        y={85.21}
        width={500.64}
        height={76}
        rx={38}
        ry={38}
        transform="translate(268.59 960.81) rotate(-41.21)"
      />
      <path
        className="cls-6"
        d="m137.22,439.51h0c-10.33-17.9-4.44-40.7,13.09-51.41h0s-271.09,156.5-271.09,156.5l38,65.82,271.09-156.51-.02-.03c-18.05,9.83-40.74,3.53-51.07-14.37Z"
      />
      <path
        className="cls-7"
        d="m1302.26,434.15c7.17-6.28,16.78-7.02,21.47-1.67,4.69,5.35,2.68,14.78-4.49,21.06l248.94-218-16.98-19.39-248.94,218Z"
      />
      <rect
        className="cls-5"
        x={-201.25}
        y={360.39}
        width={486.22}
        height={84.4}
        rx={42.2}
        ry={42.2}
        transform="translate(-195.69 74.87) rotate(-30)"
      />
      <rect
        className="cls-1"
        x={1040.75}
        y={-42.61}
        width={486.22}
        height={84.4}
        rx={42.2}
        ry={42.2}
        transform="translate(338.3 868.06) rotate(-42.55)"
      />
      <rect
        className="cls-3"
        x={-199.24}
        y={543.39}
        width={486.22}
        height={84.43}
        rx={42.2}
        ry={42.2}
        transform="translate(-286.93 100.39) rotate(-30)"
      />
      <rect
        className="cls-4"
        x={1134.13}
        y={198.55}
        width={729.22}
        height={55}
        rx={27.5}
        ry={27.5}
        transform="translate(222.3 1043.37) rotate(-41.21)"
      />
      <rect
        className="cls-9"
        x={989.83}
        y={318.47}
        width={988.43}
        height={55}
        rx={27.5}
        ry={27.5}
        transform="translate(139.65 1063.39) rotate(-41.21)"
      />
    </svg>
  );
};
export default SvgDesign;
