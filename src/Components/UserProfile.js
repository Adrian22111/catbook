import MainBanner from "./MainBanner";

function UserProfile(){
    return(
        <>
            <MainBanner/>
            <div className="profile-container max-w-7xl mx-auto mt-5 flex flex-col items-center ">
                <div className="cat-credentials flex  flex-col max-w-3xl ">
                    <div className="p-5 bg-white rounded-md border-2 border-cat-orange min-w-96">
                        <div className="flex gap-x-1">
                            <p className="font-bold">Imię:</p>
                            <p>Name</p>
                        </div>
                        <div className="flex gap-x-1">
                            <p className="font-bold">Email::</p>
                            <p>Email</p>
                        </div>
                        <div className="flex gap-x-1 flex-col">
                            <p className="font-bold">Opis:</p>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default UserProfile;