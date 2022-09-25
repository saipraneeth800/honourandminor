import { React, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Admin = () => {
  let b;
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    b = localStorage.getItem("authToken");
  }
  const [authToken, setAuthToken] = useState(b ? JSON.parse(b) : null);
  const [user, setUser] = useState(b ? jwt_decode(b) : null);
  const [jd, setJd] = useState("");

  useEffect((jd) => {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    jd = jwt_decode(authToken.access);
    setJd(jd);
  }, []);

  const signOut = () => {
    setAuthToken(null);
    setUser(null);
    const ISSERVERs = typeof window === "undefined";
    if (!ISSERVERs) {
      let c = localStorage.removeItem("authToken");
      document.location.pathname = "/";
    }
  };


  const [file, setFile] = useState(null);
  const fileUpload = async (e) => {
    fetch("http://127.0.0.1:8000/v3/files/v1/api/eligibility/data/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sdata: e.target.sdata.file }),
    })
    // console.log(sdata)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const [data, setData] = useState({
    reg: "",
    acad: "",
    dept: "",
  });

  const SendData = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    fileUpload(e);
    let response = await fetch("http://localhost:8000/v2/v1/api/honoursandminors/data/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        regulation: e.target.reg.value,
        academic_year: e.target.acad.value,
        department: e.target.dept.value,
      }),
    });
    console.log(data);
  };
  if (authToken != null) {
    return (
      <>
        {jd.username === "admin" && (
          <div className="container mx-auto my-12">
            <div className="mt-16 text-right">
              <button
                className="font-bold bg-red-500 px-4 py-3 rounded-lg text-white"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
            <div>
              <h1 className="text-center my-8 text-3xl font-bold">
                Allocate Honour & Minors
              </h1>
            </div>
            <div className="container flex justify-center">
              <div className="box-border h-full w-3/4 p-4 border-2 border-indigo-300">
                <form onSubmit={submitData}>
                  <div className="container mx-auto lg:flex space-x-12 pt-4 justify-center">
                    <div className="text-center ml-8">
                      <h1 className="text-center text-lg">Regulation</h1>
                      <input
                        type="text"
                        className="rounded border-2 border-indigo-400 h-10 form-input w-32 mt-3 text-center"
                        onChange={SendData}
                        name="reg"
                      ></input>
                    </div>
                    <div className="text-center">
                      <h1 className="text-center text-lg">Academic</h1>
                      <input
                        type="text"
                        className="rounded border-2 border-indigo-400 h-10 form-input w-32 mt-3 text-center"
                        onChange={SendData}
                        name="acad"
                      ></input>
                    </div>
                    <div className="text-center">
                      <h1 className="text-center text-lg">Department</h1>
                      <input
                        type="text"
                        className="rounded border-2 border-indigo-400 h-10 form-input w-32 mt-3 text-center"
                        onChange={SendData}
                        name="dept"
                      ></input>
                      
                      
                    </div>
                    <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="text-1xl bg-red-700 rounded-lg px-8 py-3 text-white font-bold border-indigo-400 text-center"
                  >
                    Submit
                  </button>
                  </div>
                  </div>
                </form>
                  <div className="mt-8">
                    <h1 className="text-center font-bold text-lg mb-8">
                      File Upload
                    </h1>
                    <div className="lg:flex justify-center space-x-8">
                      <h1 className="text-lg mb-4">Add the list:</h1>
                      <input type="file" className="" name="sdata" />
                    </div>
                    <div className="text-center mt-8">
                      <button
                        type="submit"
                        className="text-1xl bg-blue-700 rounded-lg px-8 py-3 text-white font-bold border-indigo-400 text-center"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="text-1xl bg-red-700 rounded-lg px-8 py-3 text-white font-bold border-indigo-400 text-center"
                  >
                    Allocate Honours &#38; Minors
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    if (typeof window !== "undefined") {
      document.location.pathname = "/";
    }
  }
};

export default Admin;
