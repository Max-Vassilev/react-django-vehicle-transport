import Header from "../components/Header"
import Form from "../components/LoginRegisterForm"
import Footer from "../components/Footer"

function Login() {
    return (
        <>
            < Header />
            < Form route="/api/user/login/" method="login" />
            < Footer />
        </>
    )
}

export default Login