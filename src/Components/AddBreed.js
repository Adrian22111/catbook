import { useState } from "react";
import MainBanner from "./MainBanner"
import { FaCat } from "react-icons/fa6"
import api from "../api";

function AddBreed(){

    const [breed, setBreed] = useState();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(123);
        let form = new FormData();
        form.append('name', breed);
        try{
            api.post('/api/breeds/', form).then((response) => {
                console.log(response);
            })
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <div>
            <MainBanner/>
            <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover mt-32">
                <form  onSubmit={handleSubmit} className="inputs flex flex-col mt-5 gap-5 rounded-md  justify-center items-center">
                    <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md my-10"> 
                        <FaCat className="mx-5"/>
                        <input onChange={(e) => {setBreed(e.target.value)}} type="text" placeholder="Rasa" required  className="h-10 bg-transparent outline-none text-dark-gray w-48 mr-2"/>
                    </div>
                    <button type="submit" className={'bg-dark-gray text-light-gray p-3 rounded-3xl cursor-pointer'}>Zapisz</button>
                </form>
            </div>
        </div>
    )
}

export default AddBreed;