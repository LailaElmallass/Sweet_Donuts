import React, { useState } from 'react';
import '../style/Contact.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!message) newErrors.message = 'Message is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            
            Swal.fire({
                title: 'Thank you!',
                text: 'Your message has been successfully submitted.',
                icon: 'success',
                confirmButtonText: 'Close',
                background: '#85a7c3', 
                confirmButtonColor: '#698299',
                
            });
            
            setName('');
            setEmail('');
            setMessage('');
            navigate('/');
            
           
        }
    };

    return (
        <div className='container'>
            <h1>Keep in Touch</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    className='inputs'
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {errors.name && <div className="error">{errors.name}</div>}

                <input
                    className='inputs'
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errors.email && <div className="error">{errors.email}</div>}

                <textarea
                    className='inputs'
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                {errors.message && <div className="error">{errors.message}</div>}

                <button className='SubmitBtn' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
