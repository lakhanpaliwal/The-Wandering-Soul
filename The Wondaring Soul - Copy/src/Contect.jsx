import React, { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setFormSubmitted(true); // Show the thank you message
    setTimeout(() => {
      setFormSubmitted(false); // Hide the message after 3 seconds
    }, 3000);
  };

  return (
    <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
      <div className="text-center px-6">
        <h2 className="text-gray-800 text-3xl font-extrabold">Contact Us</h2>
        
         
      </div>

      <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
        {/* Contact Information */}
        <div className="bg-[#011c2b] rounded-lg p-6 h-full max-lg:order-1">
          <h2 className="text-xl text-white">Contact Information</h2>
          
          <ul className="mt-16 space-y-8">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 479.058 479.058">
                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
              </svg>
              <a href="mailto:info@example.com" className="text-white text-sm text-gray-500 ml-4">
                XYZ@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 482.6 482.6">
                <path d="..." />
              </svg>
              <a href="tel:+158996888" className="text-white text-sm text-gray-500 ml-4">
                +91 992XXXXXX
              </a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 368.16 368.16">
                <path d="..." />
              </svg>
              <a href="javascript:void(0)" className="text-white text-sm text-gray-500 ml-4">
                Home Address
              </a>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800">Get in Touch</h2>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="mt-1 px-4 py-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Thank You Popup */}
      {formSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">Thank You!</h3>
            <p className="mt-2 text-gray-600">
              Your message has been sent successfully. We will get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
