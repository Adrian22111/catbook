import MainBanner from "./MainBanner";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import api from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function CatProfile(){
    const catId = useParams().id;

    const [catData, setCatData] = useState();
    const [finalImages, setFinalImages] = useState();
    let images = [];
    let formatedImages = [];
    const fetchCat = async (catId) => {
        try{
            await api.get(`/api/cats/${catId}`).then((response) => {
                setCatData(response.data);                
                images = response.data.images;
                // console.log(images);
                images.map((image) => {
                    formatedImages.push({
                        original: 'https://catbook.azurewebsites.net/storage/'+image.storage_file.url,
                        thumbnail: 'https://catbook.azurewebsites.net/storage/'+image.storage_file.url
                    })    
                });
                // console.log(formatedImages);
                setFinalImages(formatedImages);
            });
        }
        catch(e){
            console.log(e);
        }
      }

      useEffect(() =>{
        fetchCat(catId);
      }, []);

    return(
        <>
            <MainBanner/>
            <div className="profile-container max-w-7xl mx-auto mt-5 flex flex-col items-center ">
                <div className="cat-credentials flex  flex-col max-w-3xl ">
                    <div className="gallery-container  mx-auto">
                        {finalImages && finalImages.length > 0 && <ImageGallery className="" items={finalImages}/>}
                    </div>
                    <div className="p-5 bg-white rounded-md border-2 border-cat-orange min-w-96">
                        <div className="flex gap-x-1">
                            <p className="font-bold">Imię:</p>
                            <p>{catData?catData.name:''}</p>
                        </div>
                        <div className="flex gap-x-1">
                            <p className="font-bold">Rasa:</p>
                            <p>{catData?catData.breed.name:''}</p>
                        </div>
                        <div className="flex gap-x-1">
                            <p className="font-bold">Właściciel:</p>
                            <p>{catData?catData.owner:''}</p>
                        </div>
                        <div className="flex gap-x-1 flex-col">
                            <p className="font-bold">Opis:</p>
                            <p>{catData?catData.desc:''}</p>
                        </div>
                    </div>  
                </div>

            </div>
        </>
    );
}

export default CatProfile;