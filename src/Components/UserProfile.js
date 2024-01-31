import MainBanner from "./MainBanner";

function UserProfile(){
    return(
        <>
            <MainBanner/>
            <div className="container bg-red-500 mx-auto mt-10">
                <div className="credentials max-w-96">
                    <div className="flex">
                        <p>Imie</p>
                        <p>Andrzej</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;