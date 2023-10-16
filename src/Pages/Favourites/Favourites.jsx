import { useEffect, useState } from "react";
import Cards from "./Cards";

const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    console.log(favourites)
    const [noFound,setNoFound] =useState("");

    useEffect(()=> {
        const favoritesItem = JSON.parse(localStorage.getItem('favourites'));
        if (favoritesItem) {
            setFavourites(favoritesItem)
        }else {
            setNoFound("No Data Found");
        }
    },[])

    const handleRemove = ()=> {
        localStorage.clear()
        setFavourites([])
        setNoFound("No Data Found");
    }
    
    return (
        <div>
            {noFound ? 
            <p className="text-center my-[213px]">{noFound}</p> : 
            <div>
                {favourites.length>0 && <div className="flex justify-center my-5"><button onClick={handleRemove} className="bg-fuchsia-900 p-2 text-white border rounded-xl hover:bg-red-400">Delete All Items</button></div>}
                <div>
                    {
                        favourites.map(phone => <Cards key={phone.id} phone={phone}></Cards> )
                    }
                </div>
            </div>
            }
        </div>
    );
};

export default Favourites;