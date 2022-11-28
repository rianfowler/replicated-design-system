import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const VARIANT = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  LINK: "link",
};
export const BTN_SIZES = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

const StyledButton = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: "8px";
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: blue;
  color: white;

  font-size: 12px;

  font-weight: 500;
  line-height: 1;
`;

const onClick = () => {
  alert("hello");
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  children: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "l", "xl"]),
  // the state of the label: active, disabled, loading, focused, pressed
  isDisabled: PropTypes.bool,
  onlyIcon: PropTypes.bool,
  //What background color to use
  bgColor: PropTypes.string,
  // Optional click handler
  onClick: PropTypes.func,
  color: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  isDisabled: false,
  onlyIcon: false,
  bgColor: "blue", // set to synth color ,
  color: "#fff",
};
