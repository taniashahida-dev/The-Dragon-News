'use client'
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";


const LogInSec = () => {
    const googlesignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });}
    const githubsignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
};
    return (
        <div>
             <h1 className="text-xl font-semibold mb-3">Login With</h1>
             <div className="space-y-3">
               

                  <button className="flex gap-2 items-center btn w-full text-lg text-blue-500 border-blue-500" onClick={googlesignIn}><FaGoogle />
                    Login With Google </button>
                
                    <button className="flex gap-2 items-center btn w-full text-lg border-black" onClick={githubsignIn}>
                       <FaGithub /> Login With Github</button>
                
             </div>
        </div>
    );
};

export default LogInSec;