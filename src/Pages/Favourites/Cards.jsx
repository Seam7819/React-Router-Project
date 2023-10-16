import React from 'react';

const Cards = ({phone}) => {

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
    <h2 className='text-2xl font-bold text-orange-600'>
        Item Added
    </h2>
    </a>
  </div>
</div>
        </div>
    );
};

export default Cards;