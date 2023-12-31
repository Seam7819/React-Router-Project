import swal from 'sweetalert';

const ShowDetails = ({phone}) => {

  const handleAddToCart = () => {
    console.log(phone)

    const addedFavouritesItem = [];
    
    const favoritesItem = JSON.parse(localStorage.getItem('favourites'));

    if(!favoritesItem) {
      addedFavouritesItem.push(phone)
      localStorage.setItem('favourites', JSON.stringify(addedFavouritesItem))
      swal("Good job!", "Product Added Successfully!", "success");
    }
    else {

      const isExist = favoritesItem.find(phone => phone.id === id)
      if (!isExist) {
        addedFavouritesItem.push(...favoritesItem, phone)
      localStorage.setItem('favourites', JSON.stringify(addedFavouritesItem))
      swal("Good job!", "Product Added Successfully!", "success");
      }
      else {
        swal("Error", "Already Added", "error");
      }

      
    }
  }

    const {id,brand,price,image_url,description} = phone;

    return (
        <div>
            <div className="relative my-20 mx-auto flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image_url}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {brand}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {description}
    </p>
    <a className="inline-block" href="#">
    <p className="mb-5 font-bold">{price}   <span>$</span></p>
      <button onClick={handleAddToCart}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to Favourites
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default ShowDetails;