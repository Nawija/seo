interface FormInputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
    type,
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="py-2 px-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
    );
};
