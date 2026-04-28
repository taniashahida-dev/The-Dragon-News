
  "use client"

  import { useForm } from "react-hook-form";
  
  const ReistrationPage = () => {
  
       const {
      register,
      handleSubmit,
        formState: { errors },
     
    } = useForm()
    const handleReg =(data)=>{
  console.log(data)
    }
    return (
      <div className="hero bg-base-200 h-screen">
        <div className="bg-white p-10 rounded-lg ">
          <h1 className="text-3xl font-semibold text-center text-mauve-800">
         Register your account
          </h1>
          <div className="divider my-5"></div>
  
          <form className="space-y-2" onSubmit={handleSubmit(handleReg)}>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Your Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter Your Name"
                 {...register("name", { required:"Name field is required" })} 
              />
            </fieldset>
  
  {
      errors.name && (<p className="text-xs text-red-600">{errors.name.message}</p>)
  }
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Photo URL</legend>
              <input
                type="url"
                className="input"
                placeholder="Enter URL"
                 {...register("photo", { required:"This field is required" })} 
              />
            </fieldset>
  
  {
      errors.photo && (<p className="text-xs text-red-600">{errors.photo.message}</p>)
  }
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Email Address</legend>
              <input
                type="email"
                className="input"
                placeholder="Enter Your Email"
                 {...register("email", { required:"Email field is required" })} 
              />
            </fieldset>
  
  {
      errors.email && (<p className="text-xs text-red-600">{errors.email.message}</p>)
  }
  
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter Your Password"
       {...register("password", { required:"Password field is required" })} 
              />
            </fieldset>
            {
      errors.password && (<p className="text-xs text-red-600">{errors.password.message}</p>)
  }
  
            <button className="btn bg-mauve-600 text-white w-full my-2">
              Register
            </button>
          </form>
        
        </div>
      </div>
    );
  };
  
  export default ReistrationPage;
  


