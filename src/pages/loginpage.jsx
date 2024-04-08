import { useNavigate } from "react-router-dom";
import Label from "../components/Atom/label";
import Input from "../components/Atom/Input";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    alert("thanks for Demoing");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-6 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md">
        <h2 className="mb-5 text-2xl font-bold text-gray-900">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Label htmlFor="email" text="Email Address" />
            <Input
              type="email"
              name="email"
              placeholder="dzakyrazi@gmail.com"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" text="Password" />
            <Input type="password" name="password" placeholder="********" />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm my-3 font-semibold">Or</p>
        <button className="flex items-center justify-center w-full hover:bg-gray-300 py-2 gap-x-3 bg-gray-200 my-4">
          <FcGoogle size={24} />
          <p className="text-sm font-semibold text-black">
            Sign in with Google
          </p>
        </button>
        <div className="text-sm font-medium text-gray-500 mt-4 text-center">
          Not registered?{" "}
          <a href="/signup" className="text-blue-700 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
