import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  url: string;
  boundary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, url, boundary }) => {
  return (
    <div
      className={`
        ${boundary ? 'border-[1px] border-buttonBgColor rounded-full p-1' : ''}  // Outer div for boundary with padding
        inline-block
      `}
    >
      <Link
        href={url}
        className="
          bg-buttonBgColor text-buttonTextColor hover:to-buttonHoverColor rounded-full text-lg sm:text-xl px-6 py-2 uppercase block
        "
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
