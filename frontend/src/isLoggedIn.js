import { useEffect, useState } from "react";

function useIsLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem("access");
        setIsLoggedIn(!!accessToken);
    }, []);

    return isLoggedIn;
}

export default useIsLoggedIn;
