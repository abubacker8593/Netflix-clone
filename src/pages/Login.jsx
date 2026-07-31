import React, { useState } from "react";
import "../index.css";
import Logo from "../assets/logo.png";
import { login, signup } from "../firebase";
import loginbg from "../../public/background_banner.jpg";
import spiner from '../assets/netflix_spinner.gif'
import { toast } from "react-toastify";
function Login() {
  const [sign, setsign] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading,setLoading] = useState(false)
  const [password, setPassword  ] = useState("");
async function user_auth (e) {
  e.preventDefault()
  setLoading(true)
  console.log(loading)
  try{
    if(sign ==='Sign In'){
    await login(email,password)
  }
  else{
    await signup(name,email,password)
  }
    console.log(loading)

 
  }catch(err){
    toast.error(err)
  }
   setLoading(false)
}

  const inputstyle =
    "w-full h-12.5 bg-[#333] rounded-sm text-white my-3 mx-0 border-0 outline-0 py-4 px-5 text-[16px] font-medium placeholder-text-[16px] placeholder:font-medium placeholder-gray-300 sm:px-1 py-1 md:px-2 py-3";
  return (
    loading ? <div className="w-screen h-screen flex justify-center items-center">
      <img src={spiner} alt="" className="w-15"/>
    </div>
    :
    <div
      className="h-screen bg-cover bg-center bg-no-repeat  py-5 px-8%  relative flex items-center justify-center"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${loginbg})`,
      }}
    >
      <img src={Logo} alt="" className="w-37.5 absolute top-8 left-8" />
      <div className="w-full max-w-112.5 bg-[rgba(0,0,0,0.6)] rounded-sm p-15 m-auto] sm:p-1  md:p-10 ">
        <h2 className="text-3xl font-medium mb-7">{sign}</h2>
        <form onSubmit={user_auth}>
          {sign !== "Sign In" ? (
            <input type="text" placeholder="Your Name" className={inputstyle}  value={name} onChange={(e)=>{setName(e.target.value)}}/>
          ) : null}

          <input type="email" placeholder="Your Email" className={inputstyle} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input
            type="password"
            placeholder="password"
            className={inputstyle}
            value={password} onChange={(e)=>{setPassword(e.target.value)}}
          />

          <button  type="submit" className="w-full border-0 outline-0 text-white rounded-sm bg-[#e50914] p-3.5 text-[16px] font-medium mt-5 cursor-pointer">
            {sign}
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-[13px] mt-1">
            <div className="flex items-center justify-center gap-1.25 mt-1">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="mt-10 text-[#737373]">
          {sign == "Sign Up" ? (
            <p>
              Already have account?
              <span
                className="ml-1.5 text-white font-medium cursor-pointer"
                onClick={() => {
                  setsign("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          ) : (
            <p>
              New to Netflix?
              <span
                className="ml-1.5 text-white font-medium cursor-pointer"
                onClick={() => {
                  setsign("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
