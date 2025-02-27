import Header from "../components/Header"
import Form from "../components/LoginRegisterForm"
import Footer from "../components/Footer"

function Login() {
    return (
        <>
            < Header />
            < Form route="/api/token/" method="login" />
            < Footer />
        </>
    )
}

export default Login