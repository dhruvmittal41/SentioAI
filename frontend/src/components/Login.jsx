import "./index.css";
import { Box } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import PasswordField from "./forms/PasswordField";
import MyButton from "./forms/MyButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  const submission = (data) => {
    AxiosInstance.post(`login/`, {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data.token);
        navigate(`/home`);
      })
      .catch((error) => {
        console.error("Error during login", error);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-night via-night2 to-night3 w-[100vw] h-[100vh] flex  justify-center items-center ">
        <form onSubmit={handleSubmit(submission)}>
          <Box className="bg-white p-[20px] w-[25%] h-[80%] min-w-[300px] rounded-[2.5vw] flex-col flex  gap-[7vh]">
            <Box className="flex justify-center items-center w-[100%]  ">
              <h1 className="font-dancing  text-[46px] text-yellow-600">
                Login
              </h1>
            </Box>
            <Box className="flex justify-center items-center w-[100%]  ">
              <MyTextField label={"email"} name={"email"} control={control} />
            </Box>
            <Box className="flex justify-center items-center w-[100%]  ">
              <PasswordField
                label={"Password"}
                name={"password"}
                control={control}
              />
            </Box>
            <Box className="flex justify-center items-center w-[100%]  ">
              <MyButton label={"Login"} type={"submit"} />
            </Box>
            <Box className="flex justify-center items-center w-[100%]  ">
              No account yet?
              <Link to="/register" className="hover:text-blue-800 ml-2">
                Sign up
              </Link>
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Login;
