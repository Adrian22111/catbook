import MainBanner from "./MainBanner";
import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa6";

function UserEditForm(){
    return(
        <>
            <MainBanner/>
            <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover mt-32">
                <form  className="inputs flex flex-col mt-5 gap-5 rounded-md  justify-center items-center">
                    <div className="login flex items-center mx-auto bg-gray-300 h-16 rounded-md mt-10 cursor-not-allowed"> 
                        <FaCat className="mx-5"/>
                        <input  disabled type="text" value="Imie" required  className="cursor-not-allowed h-10 bg-transparent outline-none text-dark-gray w-48 mr-2"/>
                    </div>
                    <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md  cursor-not-allowed"> 
                        <FaCat className="mx-5"/>
                        <input  type="text" value="Email" required  className="cursor-not-allowed h-10 bg-transparent outline-none text-dark-gray w-48 mr-2"/>
                    </div>
                    <div className="buttons flex gap-10 mx-auto mb-5">
                        <button type="submit" className={'bg-light-gray text-dark-gray hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Zapisz</button>
                        <Link to={'/cats/'}><div className={'bg-light-gray text-dark-gray  hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Powrót</div></Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UserEditForm;