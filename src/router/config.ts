import { lazy, Suspense } from "react";

const routes = [
  {
    path: "/",
    element: lazy(() => import("../pages/Home"))
  },
  {
    path: "/assessment_3_12",
    element: lazy(() => import("../pages/Assessment_3_12"))
  },
   {
    path: "/assessment_13",
    element: lazy(() => import("../pages/Assessment_13"))
  }
  ,
   {
    path: "/result",
    element: lazy(() => import("../pages/Result"))
  },
];

export default routes;

