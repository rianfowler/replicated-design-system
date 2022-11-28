import React from "react";
import PropTypes from "prop-types";

export const RadioButton = ({
  name,
  title,
  group,
  checked,
  disabled,
  onChange,
  inputClassName,
  divClassName,
  labelClassName,
}) => {
  return (
    <div
      id={`${name}-group`}
      className={`${divClassName}`}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        type="radio"
        name={group}
        id={`${group}-${name}`}
        value={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={inputClassName}
      />
      <label
        htmlFor={`${group}-${name}`}
        className={`${labelClassName} ${
          disabled ? "u-cursor--default" : "u-cursor--pointer"
        }`}
      >
        {title}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  group: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  divClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

RadioButton.defaultProps = {
  name: "name",
  title: "title",
  group: "group",
  checked: false,
  disabled: false,
  onChange: () => {
    console.log("radio button changed");
  },
  divClassName: "",
  inputClassName: "",
  labelClassName:
    "u-marginLeft--5 header-color field-section-sub-header u-userSelect--none",
};
