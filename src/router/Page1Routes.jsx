import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/DetailA",
    exact: true,
    children: <Page1DetailA />
  },
  {
    path: "/DetailB",
    exact: true,
    children: <Page1DetailB />
  }
];
