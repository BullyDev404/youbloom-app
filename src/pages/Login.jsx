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
    if (Number(data.phone) === phone) {
      toast.success("Login successful");
      login();
      navigate("/home");
    } else {
      toast.error("Invalid Input");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col gap-8 w-full max-w-md p-8 border border-gray-200">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-base text-gray-600">Please enter your details</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-col gap-2" htmlFor="phone-number">
            <p className="text-sm font-semibold text-gray-900">Phone Number</p>
            <div className="flex gap-2 items-center">
              <p className="text-base font-semibold text-gray-700">+254</p>

              <input
                className="flex-1 rounded-lg h-11 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 border border-gray-300 p-3 text-sm"
                id="phone"
                type="text"
                placeholder="9 digits"
                {...register("phone", {
                  required: "Please input your phone number",
                  pattern: {
                    value: /^\d{9}$/,
                    message: "Phone number must be 9 digits",
                  },
                })}
              />
            </div>
            {errors?.phone?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </label>

          <button
            type="submit"
            className="bg-purple-600 text-white rounded-lg py-3 px-6 font-semibold hover:bg-purple-700 transition w-full text-base"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}


export default Login;