import React, { useState } from "react";
import { Input } from "./Input";
export const IndividualForm = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true);
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
                label="Full Name"
                type="text"
                name="full_name"
                placeholder="Enter full name"
                required
            />

            <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter email address"
                required
            />

            <Input
                label="Subject (optional)"
                type="text"
                name="subject"
                placeholder="Enter subject"
            />

            <div className="flex flex-col gap-[6px]">
                <label className="text-[#344054] text-[14px] font-medium">Tell us what you need</label>
                <textarea
                 className="text-base border border-[#98A2B3] rounded-[8px] px-[14px] py-[16px]
                 placeholder focus:outline-none focus:border-[#344054]
                 "
                    type="text"
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
    );
};
