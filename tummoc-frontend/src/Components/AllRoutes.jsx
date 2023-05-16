import React, { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/Login/Login'
import Signup from '../Signup/Signup'
import Upload from '../Pages/Upload/Upload'

const AllRoutes = () => {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};
  return (
    <div>
        <Routes >

            <Route path="/"  element ={<HomePage/>}/>
           
            <Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				  <Route
					exact
					path="/upload-files"
					element={user ? <Navigate to="/" /> : <Upload/>}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
        </Routes>
    </div>
  )
}

export default AllRoutes