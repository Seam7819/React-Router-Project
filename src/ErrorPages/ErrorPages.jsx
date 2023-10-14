import { NavLink } from "react-router-dom";

const ErrorPages = () => {
    return (
        <div>
            <h2 className="text-center mt-60">
                Opps!
            </h2>
            <div className="flex justify-center items-center\">
            <NavLink to={'/'}><button>Go Back To Home</button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPages;