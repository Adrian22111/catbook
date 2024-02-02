import MainBanner from "./MainBanner";
import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa6";
import { FaShieldCat } from "react-icons/fa6";
import React, {useEffect, useState} from "react";
import { FiXCircle } from "react-icons/fi";
import api from "../api";
import { useParams } from "react-router-dom";

// const breeds = [
//     {
//         id:1,
//         name:'pers',
//     },
//     {
//         id:2,
//         name: 'paryski',
//     },
//     {
//         id:3,
//         name:'Włochaty'
//     }
// ];

// const cat = {
//     id: 1,
//     name: "Bob",
//     breed: "Pers",
//     owner: "Darek",
//     desc: "Now I am become Death, the Destroyer of Worlds",
//     // src: "../../images/examplecat.jpg",
// };


function UpdateCatForm(){
    const catId = useParams().id;
    const [modal,setModal] = useState(false);
    const [catData, setCatData] = useState();
    const [breeds, setBreeds] = useState({
        id: '',
        name: '',
    });
    const [catBreed, setCatBreed] = useState();
    const [catName, setCatName] = useState();
    const [catDesc, setCatDesc] = useState();
    const [successWindow, setSuccessWidnow] = useState();
    const [files, setFiles] = useState();

    const toggleModal = () => {
        setModal(!modal);
        setPreview(null);
    }

    const toggleSave = () => {
        setSuccessWidnow(!successWindow);
    }

    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    const [profileImage, setProfileImage] = useState('../../images/placeholder.jpg');
    // const hasMainImage = catData && catData.profile_image.storage_file.url.trim() !== '';

    function handleFile(event){
        if(event.target.files && event.target.files.length > 0){
            setFile(event.target.files[0]);
        }  
    }

    const  handleUpload = async (e) => {
        const formData = new FormData();
        formData.append('file', file);
        console.log(file);
        try{
            api.post(`/api/cat_images/${catId}`, formData).then((response) => {
                console.log(response);
                // setProfileImage('https://catbook.azurewebsites.net/storage/'+file.name)
            });
        }
        catch(e)
        {
            console.log(e);
        }
        toggleModal();
    }
    //ustawianie zdjęcia na bieżące w formularzu 
    useEffect(() => {
        if (!file) return;
        let tmp = URL.createObjectURL(file); 
        setPreview(tmp);
        URL.revokeObjectURL(file);
    }, [file]);

    //pobieranie danych kota
    const fetchCat = async (catId) => {
        try{
            await api.get(`/api/cats/${catId}`).then((response) => {
                setCatData(response.data);   
                setCatBreed(response.data.breed.id);     
                setProfileImage('https://catbook.azurewebsites.net/storage/'+response.data.profile_image.storage_file.url)     
                console.log(response.data);
            });
        }
        catch(e){
            console.log(e);
        }
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
        fetchCat(catId);  
        fetchBreeds();
    }, []);

    const handleSaveCat = async (catId) => {
        let form = new FormData();
        
        form.append('name',catName??catData.name);
        form.append('breed_id',catBreed??catData.breed.id);
        form.append('description',catDesc??catData.description);
        form.append('images', files);
        let fileList = Array.from(files);
        fileList.forEach((file) => {
            form.append(`images`, file);
        });
        // console.log(form)
        try{
            await api.put(`/api/cats/${catId}`, form).then((response) => {
                toggleSave();
                console.log(response);
            });
        }
        catch(e){
            console.log(e);
        }

    }

    return(
        <div className="">
            <MainBanner/>
            {successWindow && (
                <div className="modal w-96 h-12 bg-white fixed rounded-md p-5 m-auto left-0 right-0 top-0 bottom-0 border-2 border-black">
                    <div className="text-right relative "><button className="absolute bottom-0.5 hover:text-cat-orange" onClick={toggleSave}><FiXCircle /></button></div>
                    <p>Poprawnie zapisane dane</p>
                </div>
            )}
            {modal && (
                <div className="modal w-96 max-h-96 bg-white fixed rounded-md p-5 m-auto left-0 right-0 top-0 bottom-0 border-2 border-black">
                    <div className="text-right relative "><button className="absolute bottom-0.5 hover:text-cat-orange" onClick={toggleModal}><FiXCircle /></button></div>
                        {preview && <img src={preview} alt='main_image' className="mx-auto w-56 h-56 rounded-full object-contain"/>}
                        <input onChange={handleFile} id="file" type="file" accept="image/png, image/jpeg" className="bg-cat-orange p-5 rounded-xl text-main-theme"/>
                        <button onClick={handleUpload} className="w-full bg-light-gray text-dark-gray h-10 rounded-xl mt-4">Zapisz</button>
                </div>
            )}
            {/* <img src={catData? 'https://catbook.azurewebsites.net/'+catData.profile_image.storage_file.url : '../../images/placeholder.jpg'} alt={catData?catData.name:''} onClick={toggleModal} className="w-96 h-96 rounded-full object-contain mx-auto mt-10 cursor-pointer"/> */}
            <img src={profileImage} alt={catData?catData.name:''} onClick={toggleModal} className="w-96 h-96 rounded-full object-contain mx-auto mt-10 cursor-pointer"/>
            <div className="container flex flex-col mx-auto bg-white rounded-3xl max-w-lg bg-main-cats bg-[url('page-images/main_cats.jpg')] bg-cover mt-10">
                <div className="inputs flex flex-col mt-5 gap-5 rounded-md  justify-center items-center">
                    <div className="login flex items-center mx-auto bg-light-gray h-16 rounded-md mt-10"> 
                        <FaCat className="mx-5"/>
                        <input type= "text" defaultValue={catData?catData.name:''} onChange={(e) => {setCatName(e.target.value)}} placeholder= "Imie Kota" className="h-10 bg-transparent outline-none text-dark-gray w-48 mr-2"/>
                    </div>
                    <div className="flex items-center mx-auto bg-light-gray h-16 rounded-md">
                        <FaShieldCat className="mx-5" />
                        <select className="h-10 bg-transparent outline-none text-dark-gray w-48 mr-2" onChange={(e) => {setCatBreed(e.target.value)}} value={catBreed}>
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
                        <textarea onChange={(e) => {setCatDesc(e.target.value)}} maxLength = "1000" defaultValue={catData?catData.description:''} placeholder="Opis" className="h-40 outline-none text-dark-gray w-96 resize-none bg-transparent"/>
                    </div>
                    <div className="flex items-center mx-auto  h-16 rounded-md p-2"> 
                        <input  onChange={(e) => {setFiles(e.target.files)}} id="files" type="file" accept="image/png, image/jpeg"  multiple className="p-5 rounded-xl text-dark-gray bg-light-gray"/>
                    </div>
                    <div className="buttons flex gap-10 mx-auto mb-5">
                        <div onClick={() => {handleSaveCat(catId)}} className={'bg-light-gray text-dark-gray hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Zapisz</div>
                        <Link to={'/cats/'}><div className={'bg-light-gray text-dark-gray  hover:bg-dark-gray hover:text-light-gray p-3 rounded-3xl cursor-pointer'}>Powrót</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCatForm;
