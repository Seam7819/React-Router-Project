import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";

const Catagories = () => {

    const [phones, setPhones] = useState([]);

    useEffect(()=> {
        fetch('Phones.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    },[])

    return (
        <div>
            <h2 className="text-center text-2xl font-bold py-10 Catagory Phones">
            All Catagory Phones
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
                {
                    phones.map(phone => <Phone key={phone.id} phone={phone}></Phone> )
                }
            </div>
        </div>
    );
};

export default Catagories;