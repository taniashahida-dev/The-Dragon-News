import { FaGithub, FaGoogle } from "react-icons/fa";


const LogInSec = () => {
    return (
        <div>
             <h1 className="text-xl font-semibold mb-3">Login With</h1>
             <div className="space-y-3">
               

                  <button className="flex gap-2 items-center btn w-full text-lg text-blue-500 border-blue-500"><FaGoogle />
                    Login With Google</button>
                
                    <button className="flex gap-2 items-center btn w-full text-lg border-black">
                       <FaGithub /> Login With Github</button>
                
             </div>
        </div>
    );
};

export default LogInSec;