


function MainBanner(){
    return(
        <div className="w-full bg-cat-orange h-16">
            <div className="flex justify-between">
                <h2 className="text-4xl text-yellow-900">CATBOOK</h2>
                <div className="user-credentials">
                    <div className="text-right">Username</div>
                    <div className="text-right">Wyloguj</div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;