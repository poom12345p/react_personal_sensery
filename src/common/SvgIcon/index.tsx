import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`./react_personal_sensery/img/svg/${src}`} alt={src} width={width} height={height} />
);
