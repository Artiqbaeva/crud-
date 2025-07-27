import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="border border-gray-300 w-96 p-6 rounded-lg" action="">
        <h2 className="text-xl font-bold mb-4">Sign in</h2>
        <div>
          <input
            className="border block w-full h-10 rounded-lg mt-4 border-gray-300 indent-3"
            type="text"
            placeholder="username"
          />
        </div>
        <div>
          <input
            className="border block w-full h-10 rounded-lg mt-4 border-gray-300 indent-3"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <button className="border block w-full h-10 rounded-lg mt-4 border-gray-300 bg-black text-white">
            Submit
          </button>
        </div>
        <div className="text-center mt-4">
          <Link className="text-sm text-blue-500" to={"/"}>
            Go home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
