import { useNavigate } from "react-router-dom";
import Label from "../components/Atom/label";
import Input from "../components/Atom/Input";
import { FcGoogle } from "react-icons/fc";
import { useBackgroundImages } from "../components/Atom/UseBgImg";
const LoginPage = () => {
  const bgimages = useBackgroundImages();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    alert("thanks for Demoing");
    navigate("/");
  };

  return (
    <>
      <div className="fixed lg:top-5 lg:left-8 md:left-64 left-14 xl:left-20  text-5xl top-2 font-semibold font-Anta uppercase z-40 text-sky-700">
        WatchSite
      </div>
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(${bgimages})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(40%)",
        }}
      >
        <div className="p-6 max-w-sm w-full h-full bg-black/30 rounded-lg border border-gray-200 shadow-md backdrop-blur-md">
          <h2 className="mb-5 text-2xl font-bold text-slate-200">Log In</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <Label
                htmlFor="email"
                text="Email Address"
                custom="text-slate-100"
              />
              <Input
                type="email"
                name="email"
                placeholder="dzakyrazi@gmail.com"
                custom="text-slate-100"
              />
            </div>
            <div className="mb-4">
              <Label
                htmlFor="password"
                text="Password"
                custom="text-slate-100"
              />
              <Input type="password" name="password" placeholder="********" />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-sm my-3  text-white">Or</p>
          <button className="flex items-center justify-center w-full rounded-sm hover:bg-gray-300 py-2 gap-x-3 bg-gray-400 my-4">
            <FcGoogle size={24} />
            <p className="text-sm font-semibold text-black">
              Sign in with Google
            </p>
          </button>
          <div className="text-sm  text-white mt-4 font-semibold text-center">
            Not registered?{" "}
            <a href="/signup" className="text-sky-400 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
