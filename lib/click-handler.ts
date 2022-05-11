import { NextRouter } from "next/router";

export const navigateHandler = (router: NextRouter, href: string) => {
	router.push(href);
};
