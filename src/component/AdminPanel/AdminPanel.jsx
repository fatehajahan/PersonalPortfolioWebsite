import React, { useState, useEffect } from "react";
import { ref, onValue, getDatabase } from "firebase/database";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const data = useSelector((data)=>data.userDetails.userInfo)
    const [subscribers, setSubscribers] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [notification, setNotification] = useState("");
    const navigate = useNavigate()

    useEffect(()=>{
        if(!data){
            navigate('/adminlogin')
        }
    })

    useEffect(() => {
        const db = getDatabase();
        const emailRef = ref(db, "subscribers");

        onValue(
            emailRef,
            (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const emails = Object.values(data).map((item) => item.email);
                    console.log("Subscribers:", emails); // Log the emails
                    setSubscribers(emails);
                } else {
                    console.log("No subscribers found."); // Log if no data
                    setSubscribers([]);
                }
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching subscribers:", error);
                setNotification("Failed to fetch subscribers. Please try again.");
                setLoading(false);
            }
        );
    }, []);

    const sendNotification = async () => {
        if (!message) {
            alert("Enter a message first!");
            return;
        }

        if (subscribers.length === 0) {
            alert("No subscribers found!");
            return;
        }

        // Check for empty emails
        const invalidEmails = subscribers.filter((email) => !email || email.trim() === "");
        if (invalidEmails.length > 0) {
            console.error("Some emails are empty:", invalidEmails);
            alert("Some subscriber emails are empty. Please check your data.");
            return;
        }

        setSending(true);
        setNotification("");

        try {
            const emailPromises = subscribers.map((email) =>
                emailjs.send(
                    "service_9m9g223",
                    "template_wbivwzo",
                    { to_email: email, message },
                    "pYhyTose-IRoupRNe"
                )
            );

            await Promise.all(emailPromises);
            setNotification("Notification sent to all subscribers successfully!");
        } catch (error) {
            console.error("Error sending emails:", error);
            setNotification("Failed to send notifications. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="mt-[160px]">
            <div className="p-10 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-bold mb-4">Send Notification</h2>

                <textarea
                    className="w-full p-2 border rounded-md mb-4"
                    placeholder="Write your important notice here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                />

                <button
                    onClick={sendNotification}
                    disabled={sending || loading}
                    className={`mt-3 px-4 py-[20px] ${sending || loading ? "bg-gray-400" : "bg-[#6B46C1] text-white hover:text-black hover:bg-transparent transition duration-500"
                        } text-black font-urbanist cursor-pointer rounded-md`}
                >
                    {sending ? "Sending..." : "Send to All Subscribers"}
                </button>

                {loading && <p className="mt-3 text-gray-600">Loading subscribers...</p>}
                {notification && (
                    <p
                        className={`mt-3 ${notification.includes("Failed") ? "text-red-600" : "text-green-600"
                            }`}
                    >
                        {notification}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;