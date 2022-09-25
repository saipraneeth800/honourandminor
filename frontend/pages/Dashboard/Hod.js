import { React, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Hod = () => {
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

  const [data, setData] = useState({
    reg: "",
    acad: "",
    dept:"",
    honours_num: "",
    minors_num: "",
  });
  const [isSubmit,setIsSubmit] = useState(false)
  const [Svalue, setSValue] = useState();

  const honourslug = [];

  for (let i = 0; i < data.honours_num; i++) {
    honourslug[i] = "name" + i;
  }
  const minorslug = [];

  for (let i = 0; i < data.minors_num; i++) {
    minorslug[i] = "name" + i;
  }

  const SendData = (e) => {
    const { name, value } = e.target;
    setSValue(value)
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // console.log(data)

  const submitData = async (e) => {
    e.preventDefault();
    // console.log(data);
    // console.log(Svalue);

    let response = await fetch(
      "http://localhost:8000/v2/v1/api/honoursandminors/data/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          regulation: data.reg,
          academic_year: data.acad,
          department: data.dept,
          no_honours: data.honours_num,
          honour1:data.honour1,
          honourmax1 : data.honourmax1,
          honourmin1 : data.honourmin1,
          honour2:data.honour2,
          honourmax2 : data.honourmax2,
          honourmin2 : data.honourmin2,
          honour3:data.honour3,
          honourmax3 : data.honourmax3,
          honourmin3 : data.honourmin3,
          honour4:data.honour4,
          honourmax4 : data.honourmax4,
          honourmin4 : data.honourmin4,
          honour5:data.honour5,
          honourmax5 : data.honourmax5,
          honourmin5 : data.honourmin5,
          honour6:data.honour6,
          honourmax6 : data.honourmax6,
          honourmin6 : data.honourmin6,
          honour7:data.honour7,
          honourmax7 : data.honourmax7,
          honourmin7 : data.honourmin7,
          honour8:data.honour8,
          honourmax8 : data.honourmax8,
          honourmin8 : data.honourmin8,
          honour9:data.honour9,
          honourmax9 : data.honourmax9,
          honourmin9 : data.honourmin9,
          honour10:data.honour10,
          honourmax10 : data.honourmax10,
          honourmin10 : data.honourmin10,

          minor1:data.minor1,
          minormax1 : data.minormax1,
          minormin1 : data.minormin1,
          minor2:data.minor2,
          minormax2 : data.minormax2,
          minormin2 : data.minormin2,
          minor3:data.minor3,
          minormax3 : data.minormax3,
          minormin3 : data.minormin3,
          minor4:data.minor4,
          minormax4 : data.minormax4,
          minormin4 : data.minormin4,
          minor5:data.minor5,
          minormax5 : data.minormax5,
          minormin5 : data.minormin5,
          minor6:data.minor6,
          minormax6 : data.minormax6,
          minormin6 : data.minormin6,
          minor7:data.minor7,
          minormax7 : data.minormax7,
          minormin7 : data.minormin7,
          minor8:data.minor8,
          minormax8 : data.minormax8,
          minormin8 : data.minormin8,
          minor9:data.minor9,
          minormax9 : data.minormax9,
          minormin9 : data.minormin9,
          minor10:data.minor10,
          minormax10 : data.minormax10,
          minormin10 : data.minormin10,

          no_minors: data.minors_num,
        }),
      }
    );
    setData({reg: "",
    acad: "",
    dept:"",
    honours_num: "",
    minors_num: "",})
    setIsSubmit(true)
    alert("Submitted")
    // console.log(data);
  };


  if (authToken != null) {
    return (
      <>
        {jd.username === "jay" && (
          <div className="item-center flex-wrap mt-20">
            <div className="lg:w-3/5 md:w-3/5 shadow-2xl m-auto">
          <h1 className="text-center text-3xl font-bold pt-8">HOD Panel</h1>
              <button
                className="float-right font-bold bg-red-500 px-4 py-3 rounded text-white"
                onClick={signOut}
              >
                Sign Out
              </button>
              <div className="p-4 md:p-12 text-center">
                <h1 className="text-3xl font-bold tracking-wider">
                  Honours and Minors
                </h1>
                <div className=" lg:flex justify-center items-center pt-5 pb-8 ">
                  <h1 className="text-center lg:mr-2 text-lg">Regulation</h1>
                  <select name="reg"
                    value={Svalue}
                    onChange={SendData}
                    className="p-3 m-2 rounded border-2 border-indigo-900"
                  >
                    <option value="---" >
                      {" "}
                      ---
                    </option>
                    <option value="R-15" >
                      {" "}
                      R-15
                    </option>
                    <option value="R-20" >
                      {" "}
                      R-20
                    </option>
                  </select>
                  <h1 className="text-center lg:ml-10 lg:mr-2 text-lg">
                    Academic
                  </h1>
                  <input
                    type="text"
                    className="rounded border-2 border-indigo-900 lg:w-1/6 w-1/4 p-3 m-3 text-center"
                    onChange={SendData}
                    name="acad"
                    value={data.acad}
                  ></input>
                  <h1 className="text-center lg:ml-10 lg:mr-2 text-lg">
                    Dept.
                  </h1>
                  <input
                    type="text"
                    className="rounded border-2 border-indigo-900 lg:w-1/6 w-1/4 p-3 m-3 text-center"
                    onChange={SendData}
                    name="dept"
                    value={data.dept}
                  ></input>
                </div>
                <h1 className="text-lg font-bold">Honours</h1>

                <p className="text-md pt-3">No of Honours:</p>
                <input
                  type="number"
                  className="rounded border-2 border-indigo-900 h-8 form-input w-16 mt-3 text-center"
                  onChange={SendData}
                  name="honours_num"
                ></input>
                {Array.apply(null, { length: data.honours_num }).map((e, i) => (
                  <div key={i}>
                    <input
                      type="text"
                      key={i}
                      name={"honour" + (i+1)}
                      onChange={SendData}
                      placeholder={"Honour " + (i + 1)}
                      className="rounded border-2 border-indigo-900 h-10 form-input lg:w-50 mt-3 text-center"
                    />
                    <input
                      type="number"
                      
                      name={"honourmax" + (i+1)}
                      onChange={SendData}
                      placeholder={"Max"}
                      className="rounded border-2 border-indigo-900 h-10 form-input w-20 m-3 text-center"
                    />
                    <input
                      type="number"
                      
                      name={"honourmin" + (i+1)}
                      onChange={SendData}
                      placeholder={"Min"}
                      className="rounded border-2 border-indigo-900 h-10 form-input w-20 m-3 text-center"
                    />
                  </div>
                ))}

                <h1 className="text-lg font-bold mt-7">Minors</h1>
                <p className="text-md pt-3">No of Minors:</p>
                <input
                  type="number"
                  className="rounded border-2 border-indigo-900 h-8 form-input w-16 mt-3 text-center"
                  onChange={SendData}
                  name="minors_num"
                  value={data.minors_num}
                ></input>
                {Array.apply(null, { length: data.minors_num }).map((e, i) => (
                  <div key={i}>
                    <input
                      type="text"
                      key={i}
                      name={"minor" + (i+1)}
                      onChange={SendData}
                      placeholder={"Minor " + (i + 1)}
                      className="rounded border-2 border-indigo-900 h-10 form-input lg:w-50 mt-3 text-center"
                    />
                    <input
                      type="number"
                     
                      name={"minormax" + (i+1)}
                      onChange={SendData}
                      placeholder={"Max"}
                      className="rounded border-2 border-indigo-900 h-10 form-input w-20 m-3 text-center"
                    />
                    <input
                      type="number"
                      
                      name={"minormix" + (i+1)}
                      onChange={SendData}
                      placeholder={"Min"}
                      className="rounded border-2 border-indigo-900 h-10 form-input w-20 m-3 text-center"
                    />
                  </div>
                ))}
                <div className="pt-5 pb-8">
                  <button
                    onClick={submitData}
                    className="bg-indigo-700 shadow-lg shadow-indigo-500/50 hover:bg-indigo-900 text-white m-2 py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                  {/* {com.map((c)=>{
                return (
                  <div key={c.id}>
                  {c.id} {c.context}
                  </div>
                )
              })} */}
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

export default Hod;
