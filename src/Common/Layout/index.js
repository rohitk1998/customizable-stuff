import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  let dispatch = useDispatch(); 
  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          height: 50,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          paddingLeft: "20px",
          alignItems:"center",
          justifyContent:"flex-start"
        }}
      >
        <Link to="home"> Home</Link>
        <Link to="about"> About</Link>
        <Link to="login"> Log In</Link>
        <Link to="welcome">Welcome</Link>
        <button onClick={()=> dispatch({ type : "CLEAR_STATE" })}>Logout</button>
      </div>
      <Outlet />
    </>
  );
}

export function EmptyLayout() {
  return (
    <>
      <div 
      style={{
        backgroundColor: "turquoise",
        height: 50,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "20px",
        alignItems:"center",
        justifyContent:"flex-start"
      }}
      >
         <Link to="home"> Home</Link>
        <Link to="about"> About</Link>
        <Link to="login"> Log In</Link>
        <Link to="welcome">Welcome</Link>
        <p>Hey ! welcome to my webstie please login/signup first </p>
      </div>
      <Outlet />
    </>
  );
}

export function PublicLayout() {
  return (
    <>
      <div 
      style={{
        backgroundColor: "turquoise",
        height: 50,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "20px",
        alignItems:"center",
        justifyContent:"flex-start"
      }}
      >
        <p>Hey ! Welcome to out webstie anyone can visit it</p>
      </div>
      <Outlet />
    </>
  );
}
