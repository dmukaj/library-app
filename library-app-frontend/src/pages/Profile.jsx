import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../auth/UserContext";
import apiClient from "../api/api-client";
import { useEffect, useState } from "react";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { curentUser, fetchCurrentUser } = useCurrentUser();

  const logIn = async (e) => {
    // e.preventdefault();

    try {
      let response = await apiClient.post("auth", { email, password });
      console.log("test here,,,");
      const token = response.data.token;
      localStorage.setItem("token", token);
      await fetchCurrentUser();
    } catch (error) {
      console.log("Error logging in", error);
      alert(error.response ? error.response.data : "Invalid email or password");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchCurrentUser();
    }
  }, [fetchCurrentUser]);

  return (
    <div className=" mt-20 md:space-x-20 justify-center md:flex dark:bg-gray-900 dark:text-gray-100 items-center">
      <div className="mb-6 flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/300/300x300"
          alt=""
          className="object-cover rounded-full max-w-sm"
        />
        <h2 className="mt-10 text-3xl lg:text-4xl font-semibold text-center">
          {curentUser?.email}
        </h2>
      </div>

      <div className="p-6 dark:bg-gray-900 dark:text-gray-100 md:border-s-4 flex flex-col items-center">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl lg:text-5xl font-bold">Sign in</h1>
          <p className="text-md lg:text-xl dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-md lg:text-lg">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="name@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-md lg:text-lg">Password</label>
              </div>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                onClick={logIn}
                className="w-full lg:text-xl px-8 py-3 font-bold rounded-md bg-blue-100 hover:bg-blue-300 dark:bg-violet-400 dark:text-gray-900"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm lg:text-lg text-center dark:text-gray-400">
              Don&apos;t have an account yet?
              <NavLink
                className="hover:underline mx-2 dark:text-violet-400"
                to="/account"
              >
                Sign up.
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
