import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const Login = () => {
  let b;
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    b = localStorage.getItem("authToken");
  }
  const [authToken, setAuthToken] = useState(b ? JSON.parse(b) : null);
  const [user, setUser] = useState(b ? jwt_decode(b) : null);

  const router = useRouter();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();
    console.log("data: ", data);
    console.log("response: ", response);
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
    } else {
      alert("Invalid credentials!!");
    }
  };

  function pageallocates(pa) {
    if (pa === "admin") {
      router.push({ pathname: "/Dashboard/Admin" });
    } else if (pa === "jay") {
      router.push({ pathname: "/Dashboard/Hod" });
    } else if (pa === "praneeth") {
      router.push({ pathname: "/Dashboard/StudentDashboard" });
    } else {
      router.push({ pathname: "/" });
    }
  }

  return (
    <>
      <div className="item-center flex-wrap mt-20">
        <div className="lg:w-3/5 w-5/6 shadow-2xl m-auto">
          <div className="p-4 md:p-12 text-center">
            <form onSubmit={loginUser}>
              <h1 className="text-3xl font-serif font-bold tracking-wider">
                Login Panel
              </h1>
              <h1 className="text-xl font-semibold m-4 ">Email Id:</h1>
              <input
                type="text"
                name="username"
                className="p-3 rounded border-2 border-indigo-700 h-10 form-input"
                placeholder="Enter Email"
              />
              <h1 className="text-xl font-semibold m-4">Password:</h1>
              <input
                type="password"
                name="password"
                className="p-3 rounded border-2 border-indigo-700 h-10 form-input"
                placeholder="Enter Password"
              />
              <div className="pt-5 pb-8">
                <button type="submit" className="bg-indigo-700 shadow-lg shadow-indigo-500/50 hover:bg-indigo-900 text-white m-2 py-2 px-4 rounded-lg">
                  Login
                </button>
              </div>
              {user && pageallocates(user.username)}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
