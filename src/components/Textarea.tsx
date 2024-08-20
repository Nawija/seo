interface TextareaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    rows?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
    value,
    onChange,
    placeholder,
    required = false,
    rows,
}) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={rows}
            className="py-2 px-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-emerald-600 w-full"
        />
    );
};
