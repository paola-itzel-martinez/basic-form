import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      gray: string;
      red: string;
      white: string;
    };
  }
}
