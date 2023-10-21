interface InputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const Input = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    required,
}: InputProps) => {
    return (
        <div className="flex flex-col gap-[6px]">
            <label className="text-[#344054] text-[14px] font-medium">
                {label}
            </label>
            <input
                className="border border-[#98A2B3] rounded-[8px] px-[14px] py-[16px]
                placeholder-[#98A2B3] text-base
                focus:outline-none focus:border-[#344054]
                bg-white
                "
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};
