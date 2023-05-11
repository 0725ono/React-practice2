import { Page2 } from "../Page2";
import { UrlParmeter } from "../UrlParmeter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: true,
    children: <UrlParmeter />
  }
];
