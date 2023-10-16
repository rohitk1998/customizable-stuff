import {  Navigate, Outlet } from "react-router-dom";
import MainLayout from "../../Common/Layout";
import  { useSelector } from "react-redux"

export function PrivateRoute() {
  console.log("process", process.env.REACT_APP_NODE_ENV);
  const state = useSelector((state)=> {
    return{
      token : state.authSlice.userAuth.token
    }
  })
  return state.token !== "" ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
}
