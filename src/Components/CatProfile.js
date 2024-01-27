import MainBanner from "./MainBanner";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import api from "../api";

const images = [
    {
      original: "../images/dog.jpg",
      thumbnail: "../images/dog.jpg",
    },
    {
      original: "../images/examplecat.jpg",
      thumbnail: "../images/examplecat.jpg",
    },
  ];

  const cat = {
    id: 1,
    name: "Bob",
    breed: "Pers",
    owner: "Darek",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at nulla ut leo finibus dignissim. Phasellus ultrices sollicitudin neque ansequat sit amet non felis. Suspendisse a maximus magna, non posuere purus. Aliquam vel felis suscipit, pharetra purus et, ullamcorper quam. Praesent mollis dolor a ante pharetra faucibus. Donec dignissim, neque sed porttitor suscipit, ",
  }

function CatProfile(){
    return(
        <>
            <MainBanner/>
            <div className="profile-container max-w-7xl mx-auto mt-5 flex flex-col items-center ">
                <div className="cat-credentials flex  flex-col max-w-3xl ">
                    <div className="gallery-container  mx-auto">
                        <ImageGallery className="" items={images}/>
                    </div>
                    <div className="p-5 bg-white rounded-md border-2 border-cat-orange">
                        <div className="flex gap-x-1">
                            <p className="font-bold">Imię:</p>
                            <p>{cat.name}</p>
                        </div>
                        <div className="flex gap-x-1">
                            <p className="font-bold">Rasa:</p>
                            <p>{cat.breed}</p>
                        </div>
                        <div className="flex gap-x-1">
                            <p className="font-bold">Właściciel:</p>
                            <p>{cat.owner}</p>
                        </div>
                        <div className="flex gap-x-1 flex-col">
                            <p className="font-bold">Opis:</p>
                            <p>{cat.desc}</p>
                        </div>
                    </div>  
                </div>

            </div>
        </>
    );
}

export default CatProfile;