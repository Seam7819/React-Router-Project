import { Link } from "react-router-dom";

const Phone = ({phone}) => {

    const {id,brand,price,image_url,description} = phone;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brand}</h2>
    <p>{price}</p>
    <Link to={`/phones/${id}`}>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Phone;