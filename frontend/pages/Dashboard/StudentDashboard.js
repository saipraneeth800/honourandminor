import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

function StudentDashboard() {
  let b;
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    b = localStorage.getItem("authToken");
  }
  const [authToken, setAuthToken] = useState(b ? JSON.parse(b) : null);
  const [user, setUser] = useState(b ? jwt_decode(b) : null);
  const [jd, setJd] = useState("");
  const [Hprior, setHprior] = useState();
  const [Mprior, setMprior] = useState();
  const [hmdata, setHMdata] = useState({});
  const router = useRouter();

  const [honmin,setHonmin] = useState([])

  let q=0

  const [data, setData] = useState({});
  const sendData = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    for (let i = 1; i <= hmdata.no_honours; i++) {
      setData((prev) => {
        var d = "shonour" + i;
        return { ...prev, [d]: hmdata["honour" + i] };
      });
    }
    
    honmin.map((e,p) =>{
      for (let i = 1; i <= e.no_minors; i++) {
        setData((prev) => {
          q=q+1
          var d = "sminor" + q;
          return { ...prev, [d]: e["minor" + i] };
        });
      }
    }
    )
  };

  // console.log(data);

  const [hm, setHm] = useState([]);
  useEffect(() => {
    getHm();
  }, []);
  // console.log(hm);
  const [Sd, setSd] = useState();
  useEffect(() => {
    getSd();
  }, []);
  // console.log(Sd);

  const signOut = () => {
    setAuthToken(null);
    setUser(null);
    const ISSERVERs = typeof window === "undefined";
    if (!ISSERVERs) {
      let c = localStorage.removeItem("authToken");
      document.location.pathname = "/";
    }
  };

  const getHm = async () => {
    let response = await fetch(
      "http://127.0.0.1:8000/v1/api/v2/data/honoursandminors/hm",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authToken.access),
        },
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setHonmin(data)
      data.map((curElem) => {
        if (curElem["department"] === "mca") {
          let p = { ...curElem };
          setHMdata(p);
        }
      });
    } else if (response.statusText === "Unauthorized") {
      signOut();
    }
    hm.map((curElem) => {
      if (curElem["department"] === Sd[0].sdept.trim()) {
        let p = { ...curElem };
        setHMdata(p);
      }
    });
  };
  // console.log(honmin);
  const getSd = async () => {
    let response = await fetch(
      "http://127.0.0.1:8000/v1/api/v2/data/StudentData",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authToken.access),
        },
      }
    );
    let data1 = await response.json();
    if (response.status === 200) {
      // data1 = JSON.parse(data1)
      setSd(data1);
    } else if (response.statusText === "Unauthorized") {
      signOut();
    }
  };
  useEffect((jd) => {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    jd = jwt_decode(authToken.access);
    setJd(jd);
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    // console.log(data);
    // console.log(Svalue);
    if (data.Hpriority == data.Mpriority) {
      alert("Honour and Minor priority should not be same.");
    }
    let response = await fetch(
      "http://localhost:8000/v3/hm/v1/api/selected/data/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ssid: Sd[0].sid,
          Hpriority: data.Hpriority,
          Mpriority: data.Mpriority,
          honour_priority1: data.honour_priority1,
          honour_priority2: data.honour_priority2,
          honour_priority3: data.honour_priority3,
          honour_priority4: data.honour_priority4,
          honour_priority5: data.honour_priority5,
          honour_priority6: data.honour_priority6,
          honour_priority7: data.honour_priority7,
          honour_priority8: data.honour_priority8,
          honour_priority9: data.honour_priority9,
          honour_priority10: data.honour_priority10,

          minor_priority1: data.minor_priority1,
          minor_priority2: data.minor_priority2,
          minor_priority3: data.minor_priority3,
          minor_priority4: data.minor_priority4,
          minor_priority5: data.minor_priority5,
          minor_priority6: data.minor_priority6,
          minor_priority7: data.minor_priority7,
          minor_priority8: data.minor_priority8,
          minor_priority9: data.minor_priority9,
          minor_priority10: data.minour_priority10,

          shonour1: data.shonour1,
          shonour2: data.shonour2,
          shonour3: data.shonour3,
          shonour4: data.shonour4,
          shonour5: data.shonour5,
          shonour6: data.shonour6,
          shonour7: data.shonour7,
          shonour8: data.shonour8,
          shonour9: data.shonour9,
          shonour10: data.shonour10,

          sminor1: data.sminor10,
          sminor2: data.sminor11,
          sminor3: data.sminor12,
          sminor4: data.sminor13,
          sminor5: data.sminor14,
          sminor6: data.sminor15,
          sminor7: data.sminor16,
          sminor8: data.sminor17,
          sminor9: data.sminor18,
          sminor10: data.sminor19,
          // sminor10: data.sminor20,
        }),
      }
    );
    alert("Submitted");
    setData("");
    // e.target.reset()
    console.log(data);
  };

  let count=1;
  const qwerty = () =>{
    var q=0
    honmin.map((e,p) =>{
      for (let i = 1; i <= e.no_minors; i++) {
        setData((prev) => {
          q=q+1
          var d = "sminor" + q;
          return { ...prev, [d]: e["minor" + i] };
        });
      }
    }
    )
  }
  console.log(Sd);

  if (authToken != null) {
    return (
      <>
        {jd.username === "praneeth" && (
          <>
            <div className="item-center flex-wrap mt-20">
              <div className="lg:w-3/5 w-5/6 shadow-2xl m-auto">
                <button
                  className="float-right font-bold bg-red-500 px-4 py-3 rounded-lg text-white"
                  onClick={signOut}
                >
                  Sign Out
                </button>
                <div className="p-4 md:p-12 text-center">
                  <div
                    className="rounded-full shadow-2xl mx-auto h-48 w-48 bg-cover"
                    style={{ backgroundImage: "url(/avatar.png)" }}
                  ></div>

                  <h1 className="text-3xl font-bold p-6">
                    Name: {jd.username}
                  </h1>
                  <hr />
                  <p className="pt-4 font-bold"> Roll No.: 
                  {/* {Sd[0].sid.trim()} */}
                  </p>
                  <p className="pt-2 text-xs lg:text-sm"> CGPA: </p>
                </div>
              </div>
            </div>
            <div className="item-center flex-wrap mt-20">
              <div className="lg:w-3/5 w-5/6 shadow-2xl m-auto">
                <div className="p-4 md:p-12 text-center">
                  <form onSubmit={submitData}>
                    <h1 className="text-3xl font-bold p-6">Priority: </h1>
                    <div className="lg:flex justify-center  h-60">
                      <div className="flex items-center justify-center h-60 gap-6 ">
                        <div>
                          <h1 className="text-3xl font-bold p-6">Honours</h1>
                          <input
                            type="text"
                            pattern="[0-9]"
                            className="rounded border-2 border-indigo-900 h-9 form-input w-16 m-2 text-center "
                            name="Hpriority"
                            // value={data.Hpriority}
                            placeholder={Hprior}
                            maxLength="1"
                            // value={Hprior}
                            // onChange={(e) => [
                            //   setHprior(e.target.value),
                            //   setMprior(2),
                            // ]}
                            onChange={sendData}
                          ></input>
                        </div>
                        <div>
                          
                       
                        </div>
                      </div>
                    </div>
                            <div className="flex justify-center gap-6 flex-wrap -mt-10">
                              {Array.apply(null, {
                                length: hmdata.no_honours,
                              }).map((e, i) => (
                                <div key={i}>
                                  <div className=" mt-4 lg:text-xl">
                                    <p>{hmdata["honour" + (i + 1)]} :</p>
                                    <input
                                      type="text"
                                      
                                      key={i}
                                      name={"honour_priority" + (i + 1)}
                                      onChange={sendData}
                                      placeholder="Priority"
                                      className="rounded border-2 border-indigo-900 h-10 form-input lg:w-20 w-20 mt-3 text-center"
                                    ></input>
                                  </div>
                                </div>
                              ))}
                            </div>
                    <div className="flex items-center justify-center  h-60 gap-6 -mb-9">
                      <div>
                        <h1 className="text-3xl font-bold p-6">Minors</h1>
                        <input
                          type="text"
                          className="rounded border-2 border-indigo-900 h-9 form-input w-16 m-2 text-center"
                          name="Mpriority"
                          placeholder={Mprior}
                          // value={data.Mpriority}
                          maxLength="1"
                          // value={Mprior}
                          onChange={sendData}
                          // disabled={true}
                        ></input>
                      </div>
                      <div>
                        
                        
                      </div>
                    </div>
                          <div>
                          
                          {honmin.map((m,k)=>
                          {
                            return (
                              <div className="lg:p-8">
                            <h1 className="text-2xl uppercase mt-7 ">{m['department']}</h1>
                            <div className="flex justify-center flex-wrap gap-6 m-4">
                              {Array.apply(null, {
                              length: m.no_minors,
                            }).map((e, i) => (
                              <div  key={i}>
                                <div className=" gap-6 lg:text-xl ">
                                  <p>{m["minor" + (i + 1)]} </p>
                                  <input
                                    type="text"
                                    key={i}
                                    name={"minor_priority" + (count++)}
                                    onChange={sendData}
                                    placeholder="Priority"
                                    className="rounded border-2 border-indigo-900 h-10 form-input lg:w-20 w-16 mt-3 text-center "
                                    maxLength='2'
                                  ></input>
                                </div>
                              </div>
                            ))}</div>
                            </div>
        )
        })}
                          </div>
                    {/* {Mprior == 1 &&
                      hm.map((hms) => (
                        <div className="" key={hms.id}>
                          <h1>Minors{hms.id}</h1>
                          {Array.apply(null, { length: hms.no_minors }).map(
                            (e, i) => (
                              <div className="" key={i}>
                                <input
                                  type="text"
                                  key={i}
                                  name={"minor" + i}
                                  placeholder={"Minor " + (i + 1)}
                                  className="rounded border-2 border-indigo-900 h-10 form-input lg:w-50 mt-3 text-center"
                                />
                              </div>
                            )
                          )}
                        </div>
                      ))} */}
                    <div className="pt-5 pb-8">
                      <button
                        type="submit"
                        className="bg-indigo-700 shadow-lg shadow-indigo-500/50 hover:bg-indigo-900 text-white m-2 py-2 px-4 rounded-full"
                      >
                        Submit
                      </button>
                      <button className="bg-indigo-700 shadow-lg shadow-indigo-500/50 hover:bg-indigo-900 text-white m-2 py-2 px-4 rounded-full">
                        Modify
                      </button>
                    </div>
                  </form>
                  <div className="text-center space-x-8"></div>
                </div>
              </div>
            </div>
          </>
        )}
        <button onClick={qwerty}>click</button>
      </>
    );
  } else {
    if (typeof window !== "undefined") {
      document.location.pathname = "/";
    }
  }
}

export default StudentDashboard;
