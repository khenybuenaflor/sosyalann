import React, { useEffect,useState } from 'react'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import axios from 'axios';
import RegisterPage from './RegisterPage';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});


const AllPages = ()=> {

    const [currentUser,setCurrentUser]=useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

    function toggleRegistrationMode(e) {
        setRegistrationToggle(prevMode => !prevMode);
    }

    useEffect(()=>{
        client.get("/api/user")
        .then(function(res){
            setCurrentUser(true);
        })
        .catch(function(error) {
            setCurrentUser(false);
        });
    }, []);

    function submitRegistration(e){
        e.preventDefault();
        client.post(
            "/api/register",
            {
                email:email,
                username:username,
                password:password
            }
        ).then(function(res) {
            client.post(
              "/api/login",
              {
                email: email,
                password: password
              }
            ).then(function(res) {
              setCurrentUser(true);
            });
          });
        }
    
    function submitLogin(e){
        e.preventDefault();
        client.post(
            "/api/login",
            {
                email:email,
                password:password,
            }
        ).then(function(res) {
            setCurrentUser(true);
          });
    }

    function submitLogout(e){
        e.preventDefault();
        client.post(
            "/api/logout",
            {withCredentials:true}
        ).then(function(res){
            setCurrentUser(false);
        });
    }
    if (currentUser){
        return (
            <HomePage
            submitLogout={submitLogout}
            /> 
        );
    }else{
        return(
            <>
            {registrationToggle ? (
                <RegisterPage
                toggleRegistrationMode={toggleRegistrationMode}
                submitRegistration={submitRegistration}
                setEmail={setEmail}
                setUsername={setUsername}
                setPassword={setPassword}
                email={email}
                password={password}
                username={username}
                />
            ):(
                <LoginPage
                toggleRegistrationMode={toggleRegistrationMode}
                submitLogin={submitLogin}
                setEmail={setEmail}
                setPassword={setPassword}
                email={email}
                password={password}
                />
            )}
        </>    
        )
    }    
}

export default AllPages
