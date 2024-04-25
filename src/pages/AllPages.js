import React, { useEffect,useState } from 'react'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import axios from 'axios';
import RegisterPage from './RegisterPage';
import ConfirmEmailPage from './ConfirmEmailPage';
import HomePageVer from './HomePageVer';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://192.168.218.91:8000"
});

 //const client = axios.create({
    // baseURL: "http://192.168.138.91:8000"
   //});


const AllPages = ()=> {

    const [currentUser,setCurrentUser]=useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [cancelToggle, setCancelToggle] = useState(false);
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [OTP,setOTP] = useState('');
    const [emailVerified, setEmailVerified] = useState();
    const [activeUser, setActiveUser] = useState('');


    function toggleRegistrationMode(e) {
        setRegistrationToggle(prevMode => !prevMode);
    }

    function toggleCancelEmailVer(e){
        setCancelToggle(prevMode => !prevMode);
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
            const {verified} = res.data;
            const {username} = res.data;
            setActiveUser(username)
            if (verified === 'True'){
                setEmailVerified(true)
            }else{
                setEmailVerified(false)
            }
            
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
    function sendOTP(e){
        e.preventDefault();
        client.post(
            "/api/sessionsave",
            {
                email:email,
                password:password
            }
        )
    }
    function verifyOTP(e){
        e.preventDefault();
        client.post(
            "/api/otpver",
            {
                email:email,
                OTP:OTP
            }
        )
    }

    // function sendOTP(e){
    //     e.preventDefault();
    //     client.post(
    //         "/api/otp",
    //         {
    //             email:email,
    //             password:password
    //         }
    //     ).then(response => {
            
    //         console.log(response.data);
    //     }).catch(error => {
            
    //         console.error(error);
    //     });
    // }

    // function verifyOTP(e){
    //     e.preventDefault();
    //     client.post(
    //         "/api/verify",
    //         {
    //             OTP:OTP
    //         }
    //     ).then(response => {
    //         // Handle the response from the backend
    //         console.log(response.data);
    //         // For example, if the response contains a message indicating success:
    //         // if (response.data.message === 'OTP verified successfully') {
    //         //     // Update state or perform other actions
    //         // }
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         // Handle errors
    //     });
    // }
    function checkuser(e){
        e.preventDefault();
        client.post(
            "/api/checkuserver",
            {
                params: {
                    email: email
                }
            }
        ).then (function(res){
            const isVerified = res.data.is_verified;
            console.log(isVerified)
            if(isVerified === true){
                setEmailVerified(true);
            }else{
                setEmailVerified(false);
            }

        }).catch(function(error) {
            // Handle errors
            console.error("Error:", error);
        });
    }
    if (currentUser){
        if(emailVerified){
            return(
                <HomePageVer
                    submitLogout={submitLogout}
                    CancelToggle={toggleCancelEmailVer}/>
            );
        } else {
            return(
                <>
                    {cancelToggle ? (
                        <HomePage
                            submitLogout={submitLogout}
                            CancelToggle={toggleCancelEmailVer}
                            activeUser={activeUser}
                            />
                    ) : (
                        <ConfirmEmailPage
                            sendOTP={sendOTP}
                            verifyOTP={verifyOTP}
                            CancelToggle={toggleCancelEmailVer}
                            setOTP={setOTP}
                            OTP={OTP}
                        />
                    )}
                </>
            );
        }
    } else {
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
                ) : (
                    <LoginPage
                        toggleRegistrationMode={toggleRegistrationMode}
                        submitLogin={submitLogin}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        email={email}
                        password={password}
                        checkUser={checkuser}
                    />
                )}
            </>    
        )
    }
}
export default AllPages
