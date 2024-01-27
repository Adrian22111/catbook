function Cat(props){
    return(
        <div className="cat">
            <div className="flex p-5 border-2 border-cat-orange rounded-xl gap-x-5 bg-white align-top">
                <div className="mt-1">
                    <img src = {props.catObj.src} alt={props.catObj.name} className="max-w-64 max-h-64 rounded-xl object-contain"/>
                </div>
                <div>
                    <h2 className="font-bold">{props.catObj.name}</h2>
                    <div className="flex gap-x-1">
                        <p className="font-bold">Rasa:</p>
                        <p>{props.catObj.breed}</p>
                    </div>
                    <div className="flex gap-x-1 flex-col">
                        <p className="font-bold">Opis:</p>
                        <p>{props.catObj.desc}</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Cat