"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import emailjs from 'emailjs-com';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8112574531"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sid018singh@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "436/1, Shastri Nagar, Kanpur, Uttar Pradesh(208005)"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    emailjs.send('service_08q5uxr', 'template_srnymnz', formData, '-_cRKi8syZZUQ1ouL')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! I will get back to you as soon as possible.');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, (err) => {
        console.error('FAILED...', err);
        alert('There was an error sending your message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state
      });
  };

  return (
    <motion.section initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1, 
        transition: { delay: 1.6, duration: 0.6, ease: "easeIn" }, 
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[64%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am a passionate software engineer eager to collaborate on innovative projects. With a strong foundation in programming and a love for problem-solving, I thrive in team environments. Let’s combine our ideas and skills to create something amazing!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" />
                <Input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" />
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email address" />
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
              </div>
              <Input name="service" value={formData.service} onChange={handleChange} placeholder="Select a service: Web Development/C++ Programming" />
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" className="h-[146px]" />
              <Button 
                type="submit" 
                size="md" 
                className="cursor-pointer bg-accent text-primary hover:bg-[#00e187] max-w-40" 
                disabled={isSubmitting} 
              >
                {isSubmitting ? 'Sending...' : 'Send message!'} 
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact
