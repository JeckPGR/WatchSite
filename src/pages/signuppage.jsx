import { useNavigate } from "react-router-dom";
import Label from "../components/Atom/label";
import Input from "../components/Atom/Input";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    alert("just input antyhing in loginpage..");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-6 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md">
        <h2 className="mb-5 text-xl font-bold text-gray-900">Register</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Label htmlFor="FName" text="Your Full name" />
            <Input type="text" name="FName" placeholder="dzakyrazi" />
          </div>
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
            className="text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm w-full    px-5 py-2.5 text-center"
          >
            Log In
          </button>
        </form>
        <p className="text-xs font-medium  text-gray-500 mt-4">
          By registering, you confirm that you accept our{" "}
          <span className="text-orange-600 hover:underline">Terms of Use</span>{" "}
          and{" "}
          <span className=" text-orange-600 hover:underline">
            Privacy Policy.
          </span>
        </p>
        <p className="text-center text-sm my-3 font-semibold">Or</p>
        <button className="flex items-center justify-center w-full hover:bg-gray-300 py-2 gap-x-3 bg-gray-200 my-4">
          <FcGoogle size={24} />
          <p className="text-sm font-semibold text-black">
            Sign in with Google
          </p>
        </button>
        <div className="text-sm font-medium text-center text-gray-500 mt-4">
          Already have an Account ?{" "}
          <a href="/login" className="text-blue-700  hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
