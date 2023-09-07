import { useRef } from "react";

export default function Login() {
  // Form Fields
  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  // LocalStorage credentials to validate against
  const localUsername = JSON.parse(localStorage.getItem('username') || "")
  const localPassword = JSON.parse(localStorage.getItem('password') || "")



  const handleLogin = () => {
    if (username.current?.value == localUsername && password.current?.value == localPassword) {
      localStorage.setItem("signUp", JSON.stringify(username.current?.value))
      window.location.reload()
    }
    else {
      alert("Incorrect Username or Password")
    }
  }


  return (
    <>
      <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" >
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-white">
                username
              </label>
              <div className="mt-2">
                <input
                  ref={username}
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={password}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Login In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}