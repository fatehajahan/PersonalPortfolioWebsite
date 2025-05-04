// import React, { useEffect, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { BiLogoFacebookSquare } from "react-icons/bi";
// import { FaLinkedin, FaLocationDot, FaTwitter } from "react-icons/fa6";
// import { IoIosCall, IoIosMail } from "react-icons/io";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Contactme = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//     });

//     useEffect(() => {
//         AOS.init({ once: false });
//     }, []);

//     // Handle form input changes
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs
//             .send(
//                 "service_9m9g223", // Replace with Email.js Service ID
//                 "template_0se2rch", // Replace with Email.js Template ID
//                 {
//                     from_name: formData.name,  // Sender’s name
//                     from_email: formData.email,  // Sender’s email
//                     to_email: "fatehajahan2002@gmail.com",  // Your email where you want to receive it
//                     to_name: "Fateha Jahan",
//                     subject: formData.subject,  // Subject
//                     message: formData.message,  // Message content
//                     reply_to: formData.email,
//                     subject: formData.subject,
//                 },
//                 "pYhyTose-IRoupRNe" // Replace with Email.js Public Key
//             )
//             .then(
//                 (response) => {
//                     console.log("Email sent successfully!", response);
//                     alert("Message sent!");
//                     setFormData({ name: "", email: "", subject: "", message: "" });
//                 },
//                 (error) => {
//                     console.error("Error sending email:", error);
//                     alert("Failed to send message. Please try again.");
//                 }
//             );
//     };

//     return (
//         <div className="md:pt-[300px] pt-[30px] pb-[150px]" data-aos="fade-up" data-aos-duration="2000">
//             <div className="container bg-[#F6F7F9] py-[70px] rounded-4xl md:flex justify-between md:relative">
//                 <div className="md:px-0 mx-[20px] md:mb-0 mb-[40px]">
//                     <h1 className="md:text-[65px] text-[40px] font-bold">Contact Me</h1>
//                     <p className="text-[20px] font-urbanist font-semibold pt-[30px] md:w-[50%]">
//                         "Feel free to reach out for collaborations or opportunities! Let's build something amazing together."
//                     </p>

//                     <div className="flex items-center mt-[30px] gap-x-[20px]">
//                         <FaLocationDot className="text-[30px]" />
//                         <p className="text-[22px] font-urbanist">1219-Dhaka , Bangladesh</p>
//                     </div>

//                     <div className="flex items-center mt-[30px] gap-x-[20px]">
//                         <IoIosMail className="text-[30px]" />
//                         <p className="text-[22px] font-urbanist">fatehajahan2002@gmail.com</p>
//                     </div>

//                     <div className="flex items-center mt-[30px] gap-x-[20px]">
//                         <IoIosCall className="text-[30px]" />
//                         <p className="text-[22px] font-urbanist">+88 019 881 66687</p>
//                     </div>

//                     <div className="pt-[50px] flex gap-x-[30px]">
//                         <BiLogoFacebookSquare className="text-black md:text-[50px] text-[33px] cursor-pointer" />
//                         <FaTwitter className="text-black md:text-[50px] text-[33px] cursor-pointer" />
//                         <FaLinkedin className="text-black md:text-[50px] text-[33px] cursor-pointer" />
//                     </div>
//                 </div>

//                 {/* Contact Form */}
//                 <div className="bg-white py-[50px] px-[50px] rounded-3xl md:absolute top-[-100px] right-[50px] md:w-[600px] shadow-2xl">
//                     <form onSubmit={handleSubmit}>
//                         <div className="md:flex md:gap-x-[20px]">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="border border-[#DCDCDC] md:py-[25px] py-[13px] px-[10px] md:w-1/2 w-full placeholder:text-[14px]"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="border border-[#DCDCDC] md:py-[25px] py-[13px] px-[10px] md:w-1/2 w-full placeholder:text-[14px] md:mt-0 mt-[30px]"
//                                 required
//                             />
//                         </div>

//                         <div className="flex flex-col gap-y-[30px]">
//                             <input
//                                 type="text"
//                                 name="subject"
//                                 placeholder="Subject"
//                                 value={formData.subject}
//                                 onChange={handleChange}
//                                 className="border border-[#DCDCDC] md:py-[25px] py-[13px] px-[10px] w-full placeholder:text-[14px] mt-[30px]"
//                                 required
//                             />
//                             <textarea
//                                 name="message"
//                                 placeholder="Message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 className="w-full h-[250px] p-4 border border-gray-300 resize-none placeholder:text-[14px]"
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="bg-[#CDFE7D] text-black font-bold py-[20px] px-[15px] text-center w-[200px] font-urbanist hover:bg-transparent transition duration-500 md:mx-0 mx-auto"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contactme;



import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoIosCall, IoIosMail } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Contactme = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        AOS.init({ once: false });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Data:", {
            from_name: formData.name,
            from_email: formData.email,
            to_email: "fatehajahan2002@gmail.com",
            to_name: "Fateha Jahan",
            subject: formData.subject,
            message: formData.message,
            reply_to: formData.email,
        });

        emailjs
            .send(
                "service_9m9g223",
                "template_0se2rch",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    to_email: "fatehajahan2002@gmail.com",
                    to_name: "Fateha Jahan",
                    subject: formData.subject,
                    message: formData.message,
                    reply_to: formData.email,
                },
                "pYhyTose-IRoupRNe"
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response);
                    alert("Message sent!");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                },
                (error) => {
                    console.error("Error sending email:", error);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div className="md:pt-[300px] pt-[30px] pb-[150px]" data-aos="fade-up" data-aos-duration="2000">
            <div className="container bg-[#F6F7F9] py-[70px] rounded-4xl md:flex justify-between md:relative">
                {/* Left Section */}
                <div className="md:px-0 mx-[20px] md:mb-0 mb-[40px]">
                    <h1 className="md:text-[65px] text-[40px] font-bold">Contact Me</h1>
                    <p className="text-[20px] font-urbanist font-semibold pt-[30px] md:w-[50%]">
                        "Feel free to reach out for collaborations or opportunities! Let's build something amazing together."
                    </p>

                    <div className="flex items-center mt-[30px] gap-x-[20px]">
                        <FaLocationDot className="text-[30px]" />
                        <p className="md:text-[22px] text-base font-urbanist">1219-Dhaka , Bangladesh</p>
                    </div>

                    <div className="flex items-center mt-[30px] gap-x-[20px]">
                        <IoIosMail className="text-[30px]" />
                        <p className="md:text-[22px] text-base font-urbanist">fatehajahan2002@gmail.com</p>
                    </div>

                    <div className="flex items-center mt-[30px] gap-x-[20px]">
                        <IoIosCall className="text-[30px]" />
                        <p className="md:text-[22px] text-base font-urbanist">+88 019 881 66687</p>
                    </div>

                    <div className="pt-[50px] flex gap-x-[30px]">
                        <a href="">
                            <BiLogoFacebookSquare className="text-black md:text-[50px] text-[33px] cursor-pointer" />
                        </a>
                        <a href="https://github.com/fatehajahan" target="_blank">
                            <FaGithub  className="text-black md:text-[50px] text-[33px] cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/fateha-jahan-77429921b/" target="_blank">
                            <FaLinkedin className="text-black md:text-[50px] text-[33px] cursor-pointer" />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white py-[50px] px-[50px] rounded-3xl md:absolute top-[-100px] right-[50px] md:w-[600px] shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="md:flex md:gap-x-[20px]">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-[#DCDCDC] md:py-[25px] py-[13px] px-[10px] md:w-1/2 w-full placeholder:text-[14px]"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-[#DCDCDC] md:py-[25px] py-[13px] px-[10px] md:w-1/2 w-full placeholder:text-[14px] md:mt-0 mt-[30px]"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-y-[30px]">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="border border-[#DCDCDC] md:py-[25px] py-[13px] px-[10px] w-full placeholder:text-[14px] mt-[30px]"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full h-[250px] p-4 border border-gray-300 resize-none placeholder:text-[14px]"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#A78BFA] text-black font-bold py-[20px] px-[15px] text-center w-[200px] font-urbanist hover:bg-transparent transition duration-500 md:mx-0 mx-auto cursor-pointer"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactme;