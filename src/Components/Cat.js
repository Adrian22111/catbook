import api from "../api";
import { useState } from "react";

function Cat(props){

    const imgUrl = props.cat.profile_image?.storage_file?.url;

    return(
        <div className="cat" >
            <div className="flex p-5 border-2 border-cat-orange rounded-xl gap-x-5 bg-white align-top">
                <div className="mt-1">
                    {imgUrl !== undefined ? (
                        <img
                        src={`https://catbook.azurewebsites.net/storage/${imgUrl}`}
                        alt={props.name}
                        className="max-w-64 max-h-64 rounded-xl object-contain"
                        />
                    ) : (
                        <img
                        src="../images/placeholder.jpg"
                        alt={props.name}
                        className="max-w-64 max-h-64 rounded-xl object-contain"
                        />
                    )}
                </div>
                <div>
                    <h2 className="font-bold">{props.name}</h2>
                    <div className="flex gap-x-1">
                        <p className="font-bold">Rasa:</p>
                        <p>{props.breed}</p>
                    </div>
                    <div className="flex gap-x-1 flex-col">
                        <p className="font-bold">Opis:</p>
                        <p>{props.desc}</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Cat