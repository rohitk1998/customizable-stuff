import {  Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/index";
import { PublicRoute } from "./PublicRoute/index";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./Routes";

export function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
      {PRIVATE_ROUTES.map((route) => (
          <Route key={route.index} path={route.path} element={<route.element/>} />
        ))}
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {PUBLIC_ROUTES.map((route) => (
          <Route key={route.index} path={route.path} element={<route.element/>} />
        ))}
      </Route>
    </Routes>
  );
}
