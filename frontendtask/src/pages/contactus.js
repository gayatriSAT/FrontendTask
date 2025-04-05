import React, { useState } from "react";
import EchoesOfExcellence from "../components/testimonials";
import Button from "../common/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    jobTitle: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-12 px-40 ">
        <EchoesOfExcellence />
      <div className=" mx-auto space-y-10 pt-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Take the <span className="text-dark-pink">Next Step</span> Get
              Personalized Solutions <span className="text-dark-pink">Today!</span>
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Contact Information
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md p-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email ID"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
                className="border rounded-md p-2"
              />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="border rounded-md p-2"
              />
            </div>

            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            >
              <option value="">Which product space your interest?</option>
              <option value="AI Tools">AI Tools</option>
              <option value="Web Development">Web Development</option>
              <option value="Automation">Automation</option>
            </select>

            <textarea
              name="message"
              placeholder="Write Your Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
        <Button children='Submit' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;