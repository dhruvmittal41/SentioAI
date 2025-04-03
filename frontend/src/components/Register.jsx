import "./index.css";
import { Box } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import PasswordField from "./forms/PasswordField";
import MyButton from "./forms/MyButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();

  const submission = (data) => {
    AxiosInstance.post(`register/`, {
      email: data.email,
      password: data.password,
    }).then(() => {
      navigate(`login/`);
    });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-night via-night2 to-night3 w-[100vw] h-[100vh] flex  justify-center items-center ">
        <form onSubmit={handleSubmit(submission)}>
          <Box className="bg-white p-[20px] w-[25%] h-[80%] min-w-[300px] rounded-[2.5vw] flex-col flex  gap-[5vh]">
            <Box className="flex justify-center items-center w-[100%]  ">
              <h1 className="font-dancing  text-[46px] text-yellow-600">
                Sign Up
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
              <PasswordField
                label={"Confirm Password"}
                name={"password2"}
                control={control}
              />
            </Box>
            <Box className="flex justify-center items-center w-[100%]  ">
              <MyButton label={"Sign Up"} type={"submit"} />
            </Box>
            <Box className="flex justify-center items-center w-[100%]  ">
              Already have an account?
              <Link to="/login" className="hover:text-blue-800 ml-2">
                Login
              </Link>
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Register;
