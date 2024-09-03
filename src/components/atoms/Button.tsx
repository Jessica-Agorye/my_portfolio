import React from "react";

type Button = {
  href?: string;
  children: React.ReactNode;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const Button = ({ href, children, className = "", ...props }: Button) => {
  const buttonClass = `button ${className}`;
  const linkClass = `link-button ${className}`;

  if (href) {
    return (
      <a
        href={href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={linkClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;
