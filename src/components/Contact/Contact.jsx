import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Message has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contacts" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <ContactLeft />

        {/* Right Section */}
        <div className="w-72 lg:w-[60%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
          <form className="flex flex-col gap-6">
            {errMsg && (
              <p className="py-3 text-center text-orange-500 text-base tracking-wide animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-3 text-center text-green-500 text-base tracking-wide animate-bounce">
                {successMsg}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Name */}
              <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`contactInput ${
                    errMsg === "Username is required!" && "outline-designColor"
                  }`}
                  type="text"
                />
              </div>
              {/* Phone */}
              <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`contactInput ${
                    errMsg === "Phone number is required!" && "outline-designColor"
                  }`}
                  type="text"
                />
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 uppercase tracking-wide">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`contactInput ${
                  errMsg === "Please give your Email!" && "outline-designColor"
                }`}
                type="email"
              />
            </div>
            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 uppercase tracking-wide">
                Subject
              </label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`contactInput ${
                  errMsg === "Please give your Subject!" && "outline-designColor"
                }`}
                type="text"
              />
            </div>
            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 uppercase tracking-wide">
                Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`contactTextArea ${
                  errMsg === "Message is required!" && "outline-designColor"
                }`}
                rows="5"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              onClick={handleSend}
              className="w-full h-12 bg-[#141518] rounded-lg text-gray-400 hover:text-white duration-300 hover:border-designColor border-transparent"
            >
              Send Message
            </button>
            {successMsg && (
              <p className="py-3 text-center text-green-500 text-base tracking-wide animate-bounce">
                {successMsg}
              </p>
            )}
            {errMsg && (
              <p className="py-3 text-center text-orange-500 text-base tracking-wide animate-bounce">
                {errMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
