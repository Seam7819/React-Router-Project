
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1182866691/photo/social-media-and-digital-online-concept-woman-using-smartphone-and-show-technology-icon.jpg?b=1&s=612x612&w=0&k=20&c=prWKrrh-VY9L-8T5jlERra5tlo-BSph01lSLdPsGd5I=)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="relative">
        <input type="text" placeholder="Search here" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Search now</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;