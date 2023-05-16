
import styles from "./styles.module.css";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { useNavigate ,Link} from "react-router-dom";
import { LoginService } from "../../Services/AuthServices";
import { useState } from "react";
import axios from "axios"
import { addUserData, setLoggedIn, setLoginLoading } from "../../Redux/auth/action";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login"

function Login() {
  const [loginValues, setLoginValues] = useState({
    Email: "",
    Password: "",
  });


  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const HandleSubmit = async () => {
    try {
      const response = await LoginService(loginValues);


    console.log(response?.user?.userName)

      if (response.token) {
        localStorage.setItem("details",response.user.userName)
        dispatch(setLoginLoading(true));
        dispatch(addUserData(response));
        dispatch(setLoggedIn(true));
        toast({
          title: "User Registerd successfully",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
     
        localStorage.setItem("details",response.user.LastName)
        navigate("/");
      } else {
        toast({
          title: "Something Went Wrong",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {}
  };

  const GotoLogin = () => {
    navigate("/signup");
  };
  const responseGoogle = (response) => {
    axios({
        method: "POST",
        url: "https://tummoc-backend.onrender.com/auth/google/callback",
        data: { tokenId: response.tokenId }
    }).then(response => {
        console.log(response)
    })
}
	return (
		<div className={styles.container}>
	
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Log in</h2>
					<input  name="Email"
                value={loginValues.Email}
                onChange={HandleChange}
                type="email" className={styles.input}
                 placeholder="Email" />


					<input   name="Password"
                value={loginValues.Password}
                onChange={HandleChange}
                type="password" className={styles.input} 
                placeholder="Password" />

					<button className={styles.btn}   onClick={HandleSubmit} >Log In</button>
					<p className={styles.text}>or</p>
				
            <GoogleLogin
            clientId="119104588854-cims2jpfr5h1mrt3ld6h68218fhsfmmt.apps.googleusercontent.com"
            buttonText=" Login with Google "
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />,
					
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sing Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;