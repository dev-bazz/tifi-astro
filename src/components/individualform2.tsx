import React, { useState } from "react";
import { Input } from "./Input";
export  const IndividualForm = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonDisabled(true);
        console.log(formData);
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="my-16 max-w-2xl w-full mx-auto p-4 font-plus">
                <h1 className='font-redhat md:text-5xl w-full mb-16 text-center font-bold mt-8'>LET US KNOW HOW WE CAN HELP YOUR BUSINESS.</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
                label="Full Name"
                type="text"
                name="full_name"
                value={formData.full_name}
                placeholder="Enter full name"
                onChange={handleChange}
                required
               
            />

            <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <Input
                label="Subject (optional)"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
            />

            <div className="flex flex-col gap-[6px]">
                <label className="text-[#344054] text-[14px] font-medium">Tell us what you need</label>
                <textarea
                 className="text-base border border-[#98A2B3] rounded-[8px] px-[14px] py-[16px]
                 placeholder focus:outline-none focus:border-[#344054]
                 "
                    
                    name="message"
                    placeholder="Type your message ..."
                    required
                    onChange={(e) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            needs_description: e.target.value,
                        }))
                    }
                    rows={4}
                />
            </div>

            <button disabled={buttonDisabled}
            className="bg-[#FF601F] text-base text-white font-bold py-[16px] font-inter rounded-[8px] disabled:opacity-50 disabled:cursor-not-allowed"
            >SEND MESSAGE</button>
        </form>
        </div>
    );
};

