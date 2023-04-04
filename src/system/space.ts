import { toCssUnit } from "./util";
type SpaceKeys =
  | "m"
  | "mt"
  | "mr"
  | "mb"
  | "ml"
  | "mx"
  | "my"
  | "p"
  | "pt"
  | "pr"
  | "pb"
  | "pl"
  | "px"
  | "py";

export type SpaceProps = Partial<Record<SpaceKeys, string | number>>;

const spaceMappings: Record<SpaceKeys, string> = {
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",
  mx: "margin-left,margin-right",
  my: "margin-top,margin-bottom",
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",
  px: "padding-left,padding-right",
  py: "padding-top,padding-bottom",
};

export const space = (props: SpaceProps): string => {
  let styles = "";
  for (const key in spaceMappings) {
    const cssValue = props[key as SpaceKeys];
    if (cssValue) {
      const properties = spaceMappings[key as SpaceKeys].split(",");
      for (const property of properties) {
        styles += `${property}: ${toCssUnit(cssValue)}; `;
      }
    }
  }

  return styles;
};