
import React, { useState } from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";
import { getDatabase, push, ref } from "firebase/database";

const Footer = () => {
    const [email, setEmail] = useState("");
    const db = getDatabase()

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter a valid email address.");
            return;
        }

        const emailRef = ref(db, "subscribers");
        push(emailRef, { email })
            .then(() => {
                alert("Subscription successful!");
                setEmail("");
            })
            .catch((error) => {
                console.error("Error saving email:", error);
                alert("Subscription failed. Please try again.");
            });
    };


    return (
        <div className="bg-[#F7F7F8] pt-[100px]">
            <div className="container md:flex justify-between items-center">
                <div className="md:w-1/2 md:px-0 px-[20px] md:mx-0 mx-auto">
                    <div>
                        <h1 className="text-[30px] font-revolution font-bold">Fateha</h1>
                        <p className="md:w-[450px] pt-[30px] font-urbanist text-[20px]">
                            "Let's collaborate and combine our strengths to create something truly remarkable together!"
                        </p>
                    </div>

                    {/* Subscription Form */}
                    {/* <form onSubmit={handleSubscribe} className="mt-[30px] flex gap-[30px] items-center relative">
                        <input
                            type="email"
                            placeholder="Type Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-[#DCDCDC] py-[18px] px-[15px] block placeholder:text-[16px] w-[400px] rounded-4xl"
                        />
                        <button
                            type="submit"
                            className="bg-[#A78BFA] text-black font-urbanist text-[18px] py-[10px] text-center px-[15px] cursor-pointer rounded-4xl hover:bg-transparent transition duration-500 absolute md:right-[252px] right-[10px]"
                        >
                            Subscribe
                        </button>
                    </form> */}
                </div>

                <div className="md:w-1/2 md:text-right text-left md:px-0 px-[20px] md:pt-0 pt-[30px]">
                    <div className="font-urbanist text-[20px] flex flex-col gap-y-[20px]">
                        <p>+88 019 881 66687</p>
                        <Link to="/contactme">Contact Me</Link>
                        <Link to="/aboutme">About me</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                </div>
            </div>

            <div className="bg-[#E9E9E9] py-[30px] mt-[60px]">
                <div className="container">
                    <p className="text-center">
                        Copyright 2025{" "}
                        <a href="" target="_blank">
                            <FaRegCopyright className="inline-block" /> fateha_jahan
                        </a>
                        , All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
