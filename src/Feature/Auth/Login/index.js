import FormHoc from "../../../Common/Components/FormHoc/index";
import Button from "../../../Common/Components/Button";
function Login(props) {

  return (
    <div>
      <form onSubmit={props.handleLogin}>
        <input
          type="text"
          id="email"
          placeholder="enter email"
          {...props.register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
          })}
        />
        {props?.formError?.email?.type === "required" && (
          <p>This field is required</p>
        )}
        {props?.formError?.email?.type === "pattern" && (
          <p>Please enter a valid email address</p>
        )}
        <input
          type={"password"}
          id="password"
          {...props.register("password", {
            required: true,
          })}
          placeholder="enter password"
        />
        {props?.formError?.password?.type === "required" && (
          <p>This field is required</p>
        )}
        <input type="submit" /><br/><br/>

        {/* <Button variant={"primary"} onClick= {"Hello world"} disabled={true} name={"addfttyfsdytftyfdytef"} width={30} height={50}/> */}
      </form>
    </div>
  );
}
export default FormHoc(Login);
