import { useState } from "react";
import { sendContact } from "../services/api";

export default function Contact() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  });

  const [errors,setErrors] = useState<any>({});

  const validateForm = () => {

    const newErrors:any = {};

    if(!form.name.trim()){
      newErrors.name = "Name is required";
    } else if(form.name.length < 3){
      newErrors.name = "Name must be at least 3 characters";
    }

    if(!form.email.trim()){
      newErrors.email = "Email is required";
    } 
    else if(!/\S+@\S+\.\S+/.test(form.email)){
      newErrors.email = "Invalid email format";
    }

    if(!form.message.trim()){
      newErrors.message = "Message is required";
    } 
    else if(form.message.length < 10){
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e:any)=>{
    e.preventDefault();

    if(!validateForm()) return;

    await sendContact(form);

    alert("Message Sent!");

    setForm({
      name:"",
      email:"",
      message:""
    });

    setErrors({});
  };

  return (

    <section id="contact">

      <h2>Contact Me</h2>

      <div className="contact-card">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <textarea
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e)=>setForm({...form,message:e.target.value})}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>

  );
}