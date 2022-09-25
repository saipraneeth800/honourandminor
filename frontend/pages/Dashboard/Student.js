import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const Student = () => {
  let b;
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    b = localStorage.getItem("authToken");
  }

  const [authToken, setAuthToken] = useState(b ? JSON.parse(b) : null);
  const [user, setUser] = useState(b ? jwt_decode(b) : null);
  const [jd, setJd] = useState("");
  const router = useRouter();
  console.log(b);

  useEffect((jd) => {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    jd = jwt_decode(authToken.access);
    setJd(jd);
  }, []);

  const [hm, setHm] = useState([]);

  useEffect(() => {
    getHm();
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
  const getHm = async () => 
  {
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
      setHm(data);
    } else if (response.statusText === "Unauthorized") {
      signOut();
    }
  };
  console.log(hm);
function stdept(hms)
{
  if(hms.department === 'cse')
  return <><li key={hms.id}>              
  {hms.department}
</li></>
}
  if (authToken != null) {
    return (
      <>
        {jd.username === "praneeth" && (
          <div className="container mx-auto">
            <div className="mt-16 text-right">
              <button
                className="font-bold bg-red-500 px-4 py-3 rounded-lg text-white"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
            <div className="container mx-auto">
              <div className="text-center space-x-8">
                <ul>

                  {hm.map((hms) => (
                    stdept(hms)
        ))}
                </ul>
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

export default Student;
