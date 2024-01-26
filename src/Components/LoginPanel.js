import { useState } from "react";
import { FaCat } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";

function LoginPanel() {

    const [action, setAction] = useState("Login");

    return (
        <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover">
            <div className="header text-5xl mt-5 mx-auto text-yellow-900">CATBOOK</div>
            <div className="inputs flex flex-col mt-5 gap-5 rounded-md  justify-center items-center">
                <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md mt-10"> 
                    <FaCat className="mx-5"/>
                    <input type= "text" placeholder= "Użytkownik" className="h-10 bg-transparent outline-none text-dark-gray"/>
                </div>
                <div className="password flex items-center mx-auto bg-light-gray h-16 rounded-md">
                     <FaKey className="mx-5"/>
                    <input type = "password" placeholder="Hasło" className="h-10 bg-transparent outline-none text-dark-gray"/>
                </div>
                <div className="buttons flex gap-10 my-10 mx-auto">
                    {/* <div className="bg-light-gray h-10">123</div> */}
                    <div onClick = {() => {setAction('Sign Up')}} className={`${action === "Sign Up" ? "bg-dark-gray text-light-gray" : "bg-light-gray text-dark-gray"}   hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer`}>Zarejestruj Się</div>
                    <div onClick = {() => {setAction('Login')}} className={`${action ==="Login"?"bg-dark-gray text-light-gray":"bg-light-gray text-dark-gray"}  hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer`}>Zaloguj Się</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default LoginPanel;