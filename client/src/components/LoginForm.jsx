import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const loginUrl = 'http://localhost:5000/user/login';

    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    axios.defaults.withCredentials = true;
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(loginUrl, inputs);
            if (response.data.Status === "Success") {
                navigate("/");
            } else {
                setErrorMessage(response.data.Message);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="login-error-message hidden" style={{ color: "red" }}>{errorMessage}</p>
            <label>Enter your Username:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                    placeholder="Username..."
                />
            </label>
            <label>Enter your Password:
                <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    placeholder="Password"
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default LoginForm;