import { useState, useContext } from "react";
import { FaCat } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import Cookies from "universal-cookie"

function LoginPanel() {
    const cookies = new Cookies();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');
    const {setAuth} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();       
        try{
            let form = new FormData();
            console.log(user);
            console.log(pwd);
            form.append('username', user);
            form.append('password', pwd);
            const response = await api.post('/api/auth/login', form).then((response) => {
                console.log(response);
                const accessToken = response?.data?.access_token;
                console.log(response?.data?.accessToken);
                setAuth({user, pwd, accessToken});
                const decoded = jwtDecode(accessToken);
                cookies.set('jwt_authorization', accessToken, {
                    expires: new Date(decoded.exp * 1000),
                })
                setPwd('');
                setUser('');
                setSuccess(true);
            });
            // const roles
        } 
        catch(e){
           if(!e?.response){
                setErrMsg('Brak odpowiedzi serwera');
           }
           else if(e.response.status === 400){
                setErrMsg('Brak loginu lub hasła');
           }
           else if(e.response?.status === 401){
                setErrMsg('Błędny login lub hasła');
           }
           else{
                setErrMsg('Nieudana próba logowania');
           }
        }
    }

    return (
        // {errMsg && }
        <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover mt-32">
            <div className="header text-5xl mt-5 mx-auto text-yellow-900">CATBOOK</div>
            <form onSubmit={handleSubmit} className="inputs flex flex-col mt-5 gap-5 rounded-md  justify-center items-center">
                <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md mt-10"> 
                    <FaCat className="mx-5"/>
                    <input onChange={(e) => {setUser(e.target.value)}} type= "text" placeholder= "Użytkownik" className="h-10 bg-transparent outline-none text-dark-gray"/>
                </div>
                <div className="password flex items-center mx-auto bg-light-gray h-16 rounded-md">
                     <FaKey className="mx-5"/>
                    <input onChange={(e) => {setPwd(e.target.value)}} type = "password" placeholder="Hasło" className="h-10 bg-transparent outline-none text-dark-gray"/>
                </div>
                <div className="buttons flex gap-10 my-10 mx-auto">
                    <Link to={'/register/'}><div className={'bg-light-gray text-dark-gray hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Zarejestruj Się</div></Link>
                    <button type="submit" className={'bg-dark-gray text-light-gray hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Zaloguj Się</button>
                </div>
            </form>
        </div>
        );
    }
  
  export default LoginPanel;