import React from "react";

type Button = {
  href?: string;
  children: React.ReactNode;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const Button = ({ href, children, ...props }: Button) => {
  if (href) {
    return (
      <a
        href={href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        className="link-button"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className="button"
    >
      {children}
    </button>
  );
};

export default Button;
