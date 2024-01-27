import MainBanner from "./MainBanner";
import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa6";
import { FaShieldCat } from "react-icons/fa6";

const breeds = [
    {
        id:1,
        name:'pers',
    },
    {
        id:2,
        name: 'paryski',
    },
    {
        id:3,
        name:'Włochaty'
    }
];


function AddCatForm(){
    return(
        <div className="">
            <MainBanner/>
            <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover mt-32">
                <div className="inputs flex flex-col mt-5 gap-5 rounded-md  justify-center items-center">
                    <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md mt-10"> 
                        <FaCat className="mx-5"/>
                        <input type= "text" placeholder= "Imie Kota" className="h-10 bg-transparent outline-none text-dark-gray w-48 mr-2"/>
                    </div>
                    <div className="flex items-center mx-auto bg-light-gray h-16 rounded-md">
                        <FaShieldCat className="mx-5" />
                        <select className="h-10 bg-transparent outline-none text-dark-gray w-48 mr-2">
                            {breeds.map((breed) => (
                                <option key={breed.id} className="h-10" value={breed.id}>{breed.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md w-96 h-40 p-2"> 
                        <textarea maxLength = "1000" placeholder="Opis" className="h-40 outline-none text-dark-gray w-96 resize-none bg-transparent"/>
                    </div>
                    <div className="buttons flex gap-10 mx-auto mb-5">
                        <div className={'bg-light-gray text-dark-gray hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Zapisz</div>
                        <Link to={'/cats/'}><div className={'bg-light-gray text-dark-gray  hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Powrót</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCatForm;