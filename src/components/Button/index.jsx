import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]", circle: "rounded-[50%]" };
const variants = {
  outline: {
    blue_gray_900:
      "outline outline-[0.5px] outline-blue_gray-900 text-blue_gray-900",
  },
  fill: {
    blue_A400_33: "bg-blue-A400_33",
    orange_A200_33: "bg-orange-A200_33",
    green_600_33: "bg-green-600_33",
    purple_400_33: "bg-purple-400_33",
    green_500: "bg-green-500 text-white-A700",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "green_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_900",
    "blue_A400_33",
    "orange_A200_33",
    "green_600_33",
    "purple_400_33",
    "green_500",
  ]),
};

export { Button };
