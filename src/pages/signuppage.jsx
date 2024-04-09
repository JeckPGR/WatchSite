import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Label from "../components/Atom/label";
import Input from "../components/Atom/Input";
import { FcGoogle } from "react-icons/fc";
import { useBackgroundImages } from "../components/Atom/UseBgImg";
const Signup = () => {
  const bgimages = useBackgroundImages();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration successful!");
    navigate("/login");
  };

  const isDisabled =
    !password || !confirmPassword || password !== confirmPassword;

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (!confirmPasswordTouched) setConfirmPasswordTouched(true); // Set to true on first interaction
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen "
      style={{
        backgroundImage: `url(${bgimages})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(40%)",
      }}
    >
      <div className="p-6 max-w-sm w-full h-full bg-black/30 rounded-lg border border-gray-200 shadow-md backdrop-blur-md">
        <h2 className="mb-5 text-xl font-bold text-slate-200">Register</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <Label
              htmlFor="FName"
              text="Your Full name"
              custom="text-slate-100"
            />
            <Input type="text" name="FName" placeholder="dzakyrazi" />
          </div>
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
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" text="Password" custom="text-slate-100" />
            <Input
              type="password"
              name="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="confirmPassword"
              text="Confirm Password"
              custom="text-slate-100"
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordTouched && isDisabled && (
              <p className="text-red-700 font-semibold text-sm mt-1">
                Your password does not match.
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isDisabled}
            className={`text-white ${
              isDisabled ? "bg-gray-700" : "bg-blue-600 hover:bg-blue-700"
            } focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center`}
          >
            Log In
          </button>
        </form>
        <p className="text-xs font-medium  text-slate-200 mt-4">
          By registering, you confirm that you accept our{" "}
          <span className="text-orange-600 hover:underline">Terms of Use</span>{" "}
          and{" "}
          <span className=" text-orange-600 hover:underline">
            Privacy Policy.
          </span>
        </p>
        <p className="text-center text-sm my-3 font-semibold text-slate-200">
          Or
        </p>
        <button className="flex items-center justify-center w-full hover:bg-gray-300 py-2 gap-x-3 bg-gray-200 my-4">
          <FcGoogle size={24} />
          <p className="text-sm font-semibold text-black">
            Sign in with Google
          </p>
        </button>
        <div className="text-sm  text-center font-semibold text-slate-200 mt-4">
          Already have an Account ?{" "}
          <a href="/login" className="text-sky-400   hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
