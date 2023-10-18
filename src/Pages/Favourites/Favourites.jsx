import { useEffect, useState } from "react";
import Cards from "./Cards";

const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    const [noFound,setNoFound] =useState("");
    const [isShow, setShow] = useState(false);

    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=> {
        const favoritesItem = JSON.parse(localStorage.getItem('favourites'));
        if (favoritesItem) {
            setFavourites(favoritesItem)
            const total = favoritesItem.reduce((preValue,currentItem)=> preValue+currentItem.price,0)
            setTotalPrice(total)
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
            <h2 className="text-center my-10 text-2xl">
                Total Price : {totalPrice} <span>$</span>
            </h2>
            {noFound ? 
            <p className="text-center my-[213px]">{noFound}</p> : 
            <div>
                {favourites.length>0 && <div className="flex justify-center my-5"><button onClick={handleRemove} className="bg-fuchsia-900 p-2 text-white border rounded-xl hover:bg-red-400">Delete All Items</button></div>}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        isShow ? favourites.map(phone => <Cards key={phone.id} phone={phone}></Cards> ) :
                        favourites.slice(0,2).map(phone => <Cards key={phone.id} phone={phone}></Cards> )
                    }
                </div>
                <div className="flex justify-center my-8">
                    {
                        favourites.length>2 && <button onClick={()=> setShow(!isShow)} className="btn btn-ghost">{isShow ? "See Less" : "See More"}</button>
                    }
                </div>
            </div>
            }
        </div>
    );
};

export default Favourites;