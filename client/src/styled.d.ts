import "styled-components";

// and extend them!
declare module "styled-components" {
  type Strengths = "light" | "base" | "dark";
  export interface DefaultTheme {
    colors: {
      primary: Record<Strengths, string>;
      secondary: {
        danger: Record<Exclude<Strengths, "dark">, string>;
        warning: Record<Exclude<Strengths, "dark">, string>;
        success: Record<Exclude<Strengths, "dark">, string>;
      };
      neutral: {
        white: string;
        black: string;
        light: string;
        base: string;
      };
      bg: {
        light: string;
        dark: string;
      };
    };
    font: {
      type: {
        prompt: string[];
      };
      size: {
        xs: number;
        sm: number;
        base: number;
        md: number;
        lg: number;
        xl: number;
        "2xl": number;
        "3xl": number;
        "4xl": number;
      };
    };
  }
}
