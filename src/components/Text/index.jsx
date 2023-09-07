import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtNunitoBold20: "font-bold font-nunito",
  txtNunitoRegular14Bluegray90001: "font-normal font-nunito",
  txtNunitoBold16: "font-bold font-nunito",
  txtPoppinsBold16Bluegray900: "font-bold font-poppins",
  txtPoppinsRegular14Green500: "font-normal font-poppins",
  txtNunitoRegular14: "font-normal font-nunito",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16Bluegray900: "font-normal font-poppins",
  txtInterBold32: "font-bold font-inter",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterBold40: "font-bold font-inter",
  txtNunitoLight24: "font-light font-nunito",
  txtInterLight40: "font-inter font-light",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
