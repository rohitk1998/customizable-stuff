import { Navigate, Outlet } from "react-router-dom";
import { EmptyLayout } from "../../Common/Layout";
import { useSelector } from "react-redux";

export function PublicRoute() { 
  const state = useSelector((state)=> {
    return{
      token : state.authSlice.userAuth.token
    }
  })
  console.log("state",state);

  return state.token === "" ? (
    <EmptyLayout>
        <Outlet/>
    </EmptyLayout>
  ) : (
    <Navigate to={"/home"} />
  );
}
