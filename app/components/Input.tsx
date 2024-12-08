import React from "react";

interface InputGroupProps {
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  type = "text",
  placeholder = "",
  className = "",
  inputClassName = "",
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <label className="font-medium text-base mb-2 block text-gray-700">
        {label}
      </label>
      <input
        type={type}
        className={`rounded-sm h-[75px] border border-[#9F9F9F] w-full px-4 ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
