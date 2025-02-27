import Form from "../components/LoginRegisterForm"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Register() {
    return (
        <>
            < Header />
            <Form route="/api/user/register/" method="register" />
            < Footer />
        </>
    )
}

export default Register