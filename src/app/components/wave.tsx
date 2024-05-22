import * as React from "react";
import { SVGProps } from "react";
const Wave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <path
      fill="#0099ff"
      fillOpacity={1}
      d="M0,96L11.4,122.7C22.9,149,46,203,69,224C91.4,245,114,235,137,197.3C160,160,183,96,206,90.7C228.6,85,251,139,274,181.3C297.1,224,320,256,343,240C365.7,224,389,160,411,138.7C434.3,117,457,139,480,149.3C502.9,160,526,160,549,149.3C571.4,139,594,117,617,90.7C640,64,663,32,686,53.3C708.6,75,731,149,754,197.3C777.1,245,800,267,823,234.7C845.7,203,869,117,891,74.7C914.3,32,937,32,960,80C982.9,128,1006,224,1029,256C1051.4,288,1074,256,1097,218.7C1120,181,1143,139,1166,133.3C1188.6,128,1211,160,1234,176C1257.1,192,1280,192,1303,197.3C1325.7,203,1349,213,1371,229.3C1394.3,245,1417,267,1429,277.3L1440,288L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
    />
  </svg>
);
export default Wave;
