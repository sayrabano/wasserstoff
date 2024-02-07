import { data } from './data';
import { Hexbin } from './Hexbin';

export const HexbinMap2dCoordsDemo = ({ width = 7000, height = 7000 }) => (
  <Hexbin data={data} width={width} height={height} />
);
