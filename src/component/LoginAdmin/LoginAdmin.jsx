import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { userInfo } from "../../Slices/adminSlice";

const LoginAdmin = () => {
    const navivate = useNavigate()
    const auth = getAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const dispatch = useDispatch()

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailErr("")
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordErr("")
    }
    const handleLogin = () => {
        if (!email) {
            setEmailErr("Please give your admin mail !!")
        }
        if (!password) {
            setPasswordErr("Please give your admin PASSWORD!!")
        }
        signInWithEmailAndPassword(auth, email, password).then((user) => { console.log(user.user)
            dispatch(userInfo(user.user))
            localStorage.setItem("user" , JSON.stringify(user.user))
            toast.success("Logged in succesfully as an ADMIN.")
            setEmail("")
            setPassword("")
            setTimeout(() => {
                navivate("/admin")
            }, 3000);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode.includes("auth/invalid-credential")){
                toast.error("INCORRECT EMAIL & PASSWORD!!")
            }
        })

    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <h1 className="text-2xl font-bold text-blue-950 font-urbanist mb-4">Log in to Admin Page</h1>
            <div className="text-gray-700 mb-6">
                <input onChange={handleEmail} value={email} type="email" className="border border-gray-600 py-[10px] px-[10px] w-[300px]" />
            </div>
            <div className="text-gray-700 mb-6">
                <input onChange={handlePassword} value={password} type="password" className="border border-gray-600 py-[10px] px-[10px] w-[300px]" />
            </div>
            <p className="text-red-700 font-urbanist text-[18px] pb-[20px]">{emailErr}{passwordErr}</p>
            <button
                onClick={handleLogin}
                className="px-4 py-2 font-urbanist bg-[#6B46C1] text-white hover:text-black rounded-md hover:bg-transparent transition duration-500 cursor-pointer"
            >
                Log in to Admin Panel
            </button>
        </div>
    );
};

export default LoginAdmin;