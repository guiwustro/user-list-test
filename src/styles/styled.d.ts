import "styled-components";

import Theme from "./theme";
export type ITheme = typeof Theme;

declare module "styled-components" {
	export interface DefaultTheme extends ITheme {
		colors: {
			contrastTextWhite: string;
			contrastTextBlack: string;
			grey: string;
			lightBorder: string;
			primary: string;
			secondary: string;
			red: string;
			body: string;
		};
	}
}
