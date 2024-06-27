import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <div className=" mt-20 md:space-x-20 justify-center md:flex dark:bg-gray-900 dark:text-gray-100 items-center">
      <div className="mb-6 flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/300/300x300"
          alt=""
          className="object-cover rounded-full max-w-sm"
        />
        <h2 className="mt-10 text-3xl lg:text-4xl font-semibold text-center">
          Leroy Ideen Jenkins
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
              <label className="block mb-2 text-md lg:text-lg">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-md lg:text-lg">Password</label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm lg:text-md hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
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
                  className="w-full lg:text-xl px-8 py-3 font-bold rounded-md bg-blue-100 hover:bg-blue-300 dark:bg-violet-400 dark:text-gray-900"
                >
                  Sign in
                </button>
            </div>
            <p className="px-6 text-sm lg:text-lg text-center dark:text-gray-400">
              Don&apos;t have an account yet?

              <NavLink
              className="hover:underline mx-2 dark:text-violet-400"
              to="/account">
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
