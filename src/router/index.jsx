import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
const ScrollToTop = lazy(() => import("../common/ScrollToTop"));
const Home = lazy(() => import(`../pages/Home`));
const Assessment_3_12 = lazy(() => import(`../pages/Assessment_3_12`));
const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
       < ScrollToTop />
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <route.element />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;
