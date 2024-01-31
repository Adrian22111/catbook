import MainBanner from "./MainBanner";
import Cat from "./Cat";
import { Link } from "react-router-dom";
import api from "../api";
import { useEffect, useState } from "react";

function CatList(){
    
    const [databaseData, setDatabaseData] = useState([]);
    const fetchCats = async () => {
        try{
            const response = await api.get('/api/cats/').then((response) => {
                setDatabaseData(response.data.items||[]);
            });
        }
        catch(e){
            console.log(e);
        }
      }
    
      useEffect(() =>{
        fetchCats();
      }, []);

      const renderCatLink = (cat) => {
        return (
          <Link to={`/cats/${cat.id}`} key={cat.id}>
            <Cat name={cat.name} breed={cat.breed.name} desc={cat.description} cat={cat} />
          </Link>
        );
      };

    return(
        <div className="">
            <MainBanner/>
            <ul className="cats cat-list-container max-w-7xl mx-auto mt-10 flex flex-col gap-y-5">
                {databaseData.map((cat) => renderCatLink(cat))}
            </ul>
        </div>   
    )
}

export default CatList;