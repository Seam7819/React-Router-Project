import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "../ShowDetails/ShowDetails";

const PhoneDetails = () => {

    
    const [phone, setPhones] = useState({});
    const {id} = useParams()

    const phones = useLoaderData()
    useEffect(()=> 
    {
       const findPhone = phones?.find((phone) => phone.id == id);
       setPhones(findPhone)
    }
    ,[id,phones])
    return (
        <div>
            <h2>
                <ShowDetails phone={phone}></ShowDetails>
            </h2>
        </div>
    );
};

export default PhoneDetails;