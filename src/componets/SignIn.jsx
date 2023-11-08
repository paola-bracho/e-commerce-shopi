import { useState } from "react";

export const SignIn = () => {

    const [value, setValue] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("send", value )
    }

    const handleValue = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

  return (

    <div className="grid place-items-center mt-[60px] items-center justify-center">
        <div className="border-gray-600 border-2 rounded-xl p-20 ">
            <h1 className="text-xl text-center mb-10">Sign In</h1>
            <form className="flex flex-col gap-5 align items-center" onSubmit={handleSubmit}>

                <input className="p-1 w-72 rounded-lg border-gray-500 border" 
                    type="text" 
                    placeholder="Enter your Name" 
                    value={value.name}
                    onChange={handleValue}
                    name="name"
                    />
                <input className="p-1 w-72 rounded-lg border-gray-500 border" 
                    type="email" 
                    placeholder="Enter your e-mail" 
                    value={value.email}
                    onChange={handleValue}
                    name="email"
                    />
                <input className="p-1 w-72 rounded-lg border-gray-500 border" 
                    type="password" 
                    placeholder="Enter your password" 
                    value={value.phone}
                    onChange={handleValue}
                    name="password"
                    />

                <button className="bg-gray-800 text-white w-24 h-auto rounded-xl p-3 mt-8" type="submit">Sign In</button>
            
            </form>
        </div>
    </div>
  )
}
