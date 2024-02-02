import MainBanner from "./MainBanner"
import { FaCat } from "react-icons/fa6"

function EditBreed(){
    return(
        <div>
            <MainBanner/>
            <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover mt-32">
                <form  className="inputs flex flex-col mt-5 gap-5 rounded-md  justify-center items-center">
                    <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md my-10"> 
                        <FaCat className="mx-5"/>
                        <input type="text" placeholder="Rasa" required  className="h-10 bg-transparent outline-none text-dark-gray w-48 mr-2"/>
                    </div>
                </form>
                <button type="submit" className={'bg-dark-gray text-light-gray p-3 rounded-3xl cursor-pointer'}>Zapisz</button>
                <button className={'bg-dark-gray text-light-gray p-3 rounded-3xl cursor-pointer'}>Usuń</button>
            </div>
        </div>
    )
}

export default EditBreed;