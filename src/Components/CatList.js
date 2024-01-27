import MainBanner from "./MainBanner";
import Cat from "./Cat";
import { Link } from "react-router-dom";

const catsData = [
    {
      id: 1,
      name: "Bob",
      breed: "Pers",
      owner: "Darek",
      desc: "Now I am become Death, the Destroyer of Worlds",
      src: "../images/examplecat.jpg",
    },
    {
        id: 2,
        name: "Puszek",
        breed: "Pers",
        owner: "Arek",
        desc: "Now I am become Death, the Destroyer of Worlds",
        src: "../images/dog.jpg",
    },
  ];


function CatList(){
    return(
        <div className="">
            <MainBanner/>
            <ul className="cats cat-list-container max-w-7xl mx-auto mt-10 flex flex-col gap-y-5">
                {catsData.map((cat) => (
                    <Link to={`/cats/${cat.id}`}><Cat catObj={cat} key={cat.id} /></Link>
                ))}
            </ul>
        </div>   
    )
}

export default CatList;