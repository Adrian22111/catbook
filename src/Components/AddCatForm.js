import MainBanner from "./MainBanner";
import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa6";
import { FaShieldCat } from "react-icons/fa6";
import api from "../api";
import { useEffect, useState } from "react";
import { FiXCircle } from "react-icons/fi";


function AddCatForm(){
    const [catName, setCatName] = useState('');
    const [breed, setBreed] = useState('');
    const [desc, setDesc] = useState('');
    const [breeds, setBreeds] = useState({
        id: '',
        name: '',
    });
    const [modal,setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal);
    }
    
    const fetchBreeds = async () => {
        try{
            const response = await api.get('/api/breeds/');
            setBreeds(response.data);
            
        }
        catch(error){
            console.log(error);
            setBreeds([]);
        }
    }
    useEffect(() => {
        fetchBreeds();
    }, [] );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name',catName);
        form.append('breed_id', breed);
        form.append('description', desc);
        try{
            await api.post('/api/cats', form);          
            setCatName('');
            setBreed('');
            setDesc('');
            toggleModal();
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <div className="">
            <MainBanner/>
            <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover mt-32">
                <form onSubmit = {handleSubmit} className="inputs flex flex-col mt-5 gap-5 rounded-md  justify-center items-center">
                    <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md mt-10"> 
                        <FaCat className="mx-5"/>
                        <input onChange={(e) => {setCatName(e.target.value)}} value={catName} type="text" required placeholder= "Imie Kota" className="h-10 bg-transparent outline-none text-dark-gray w-48 mr-2"/>
                    </div>
                    <div className="flex items-center mx-auto bg-light-gray h-16 rounded-md">
                        <FaShieldCat className="mx-5" />
                        <select onChange={(e) => {setBreed(e.target.value)}} value={breed} required className="h-10 bg-transparent outline-none text-dark-gray w-48 mr-2">
                            {(breeds && breeds.length > 0)?(
                                <>
                                    <option value="" disabled  >Wybierz rasę</option>                  
                                    {breeds.map((breed) => (
                                        <option key={breed.id} className="h-10" value={breed.id}>{breed.name}</option>
                                    ))}
                                </>
                                ):(
                                    <option value="" disabled >Brak ras</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md w-96 h-40 p-2"> 
                        <textarea onChange={(e) => {setDesc(e.target.value)}} value={desc} required maxLength = "1000" placeholder="Opis" className="h-40 outline-none text-dark-gray w-96 resize-none bg-transparent"/>
                    </div>
                    <div className="buttons flex gap-10 mx-auto mb-5">
                        <button type="submit" className={'bg-light-gray text-dark-gray hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Zapisz</button>
                        <Link to={'/cats/'}><div className={'bg-light-gray text-dark-gray  hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Powrót</div></Link>
                    </div>
                </form>
                {modal && (
                    <div className="modal w-96 max-h-48 bg-white fixed rounded-md p-5 m-auto left-0 right-0 top-0 bottom-0 border-2 border-black">
                        <div className="text-right relative "><button className="absolute bottom-0.5 hover:text-cat-orange" onClick={toggleModal}><FiXCircle /></button></div>
                        <p>Poprawnie dodano Pupila !!!!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddCatForm;