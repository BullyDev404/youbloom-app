import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { login, phone } = useAuth();
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log("submitted", data);
    if (Number(data.phone) === phone) {
      console.log("success");
      toast.success("Login successful");
      login();
      navigate("/home");
    } else {
      toast.error("Invalid Input");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-purple-200/50 rounded-2xl shadow-2xl flex flex-col w-fit p-10 h-120 justify-between pt-18">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-base text-gray-500">Please enter your details</p>
        </div>

        <form
          className="flex flex-col justify-around "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            className="text-md tracking-tight flex flex-col gap-5"
            htmlFor="phone-number"
          >
            <p>Phone Number</p>
            <span className="flex gap-3 items-center">
              <p className="text-lg font-semibold">+254</p>

              <input
                className="rounded-2xl h-10 w-70 focus:ring focus:border-purple-600 bg-white shadow-2xl p-3 "
                id="phone"
                type="text"
                {...register("phone", {
                  required: "Please input your phone number",
                  pattern: {
                    value: /^\d{9}$/,
                    message: "Phone number must be 9 digits",
                  },
                })}
              />
            </span>
            {errors?.phone?.message && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </label>

          <button
            type="submit"
            className="mt-10 bg-purple-600 text-white rounded-md py-3 px-6 font-semibold shadow-2xl hover:bg-purple-500/90 cursor-pointer mx-auto w-full"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
