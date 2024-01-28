import MainBanner from "./MainBanner";
import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa6";
import { FaShieldCat } from "react-icons/fa6";
import React, {useEffect, useState} from "react";
import { FiXCircle } from "react-icons/fi";

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

const cat = {
    id: 1,
    name: "Bob",
    breed: "Pers",
    owner: "Darek",
    desc: "Now I am become Death, the Destroyer of Worlds",
    // src: "../../images/examplecat.jpg",
};


function UpdateCatForm(){
    const hasMainImage = cat && cat.src && cat.src.trim() !== '';
    const [modal,setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        setPreview(null);
    }

    const [file, setFile] = useState();
    const [preview, setPreview] = useState();

    function handleFile(event){
        if(event.target.files && event.target.files.length > 0){
            setFile(event.target.files[0]);
        }  
    }

    function handleUpload(){
        const formData = new FormData();
        formData.append('file', file);
        
        toggleModal();
    }

    useEffect(() => {
        if (!file) return;
        console.log(file);
        let tmp = URL.createObjectURL(file); 
        setPreview(tmp);
        URL.revokeObjectURL(file);
    }, [file]);

    return(
        <div className="">
            <MainBanner/>
            {modal && (
                <div className="modal w-96 max-h-96 bg-white fixed rounded-md p-5 m-auto left-0 right-0 top-0 bottom-0 border-2 border-black">
                    <div className="text-right relative "><button className="absolute bottom-0.5 hover:text-cat-orange" onClick={toggleModal}><FiXCircle /></button></div>
                        {preview && <img src={preview} alt='main_image' className="mx-auto w-56 h-56 rounded-full object-contain"/>}
                        <input onChange={handleFile} id="file" type="file" accept="image/png, image/jpeg" className="bg-cat-orange p-5 rounded-xl text-main-theme"/>
                        <button onClick={handleUpload} className="w-full bg-light-gray text-dark-gray h-10 rounded-xl mt-4">Zapisz</button>
                </div>
            )}
            <img src={(hasMainImage)? cat.src : '../../images/placeholder.jpg'} alt={cat.name} onClick={toggleModal} className="w-96 h-96 rounded-full object-contain mx-auto mt-10 cursor-pointer"/>
            <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover mt-10">
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

export default UpdateCatForm;
