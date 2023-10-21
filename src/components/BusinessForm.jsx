import { useState } from "react";
import { Input } from "./Input";
export const BusinessForm = () => {
    const [formData, setFormData] = useState({
        company_name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true);
        console.log(formData);
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
                label="Company Name"
                type="text"
                name="company_name"
                placeholder="Enter business name"
                value={formData.company_name}
                onChange={handleChange}
                required
            />
            <Input
                label="Business Email Address"
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
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
            />
            <div className="flex flex-col gap-[6px]">
                <label className="text-[#344054] text-[14px] font-medium">Tell us what you need</label>
                <textarea
                    className="text-base border border-[#98A2B3] rounded-[8px] px-[14px] py-[16px]
                 placeholder-[#98A2B3] focus:outline-none focus:border-[#344054]
                 "
                    type="text"
                    name="message"
                    placeholder="Type your message ..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                />
            </div>
            <button
                disabled={buttonDisabled}
                className="font-inter text-base bg-[#FF601F] text-white font-bold py-[16px] rounded-[8px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                SEND MESSAGE
            </button>{" "}
        </form>
    );
};
