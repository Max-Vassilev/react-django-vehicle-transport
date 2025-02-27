import { useNavigate } from "react-router-dom";
import useIsLoggedIn from "../isLoggedIn";

function CTA() {
    const isLoggedIn = useIsLoggedIn();
    const navigate = useNavigate();

    const handleRequestClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            navigate("/login", { state: { message: "Oops! You need to log in to make a request." } });
        }
    };

    return (
        <section className="cta text-center py-8">
            <a
                href="/request"
                onClick={handleRequestClick}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-5 px-10 text-xl rounded-full shadow-xl transform hover:scale-110 hover:shadow-2xl hover:bg-indigo-600 transition duration-300 ease-in-out">
                Make a Request
            </a>
        </section>
    );
}

export default CTA;
