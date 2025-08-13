import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text, ...props }) => {
  return <label {...props}>{text}</label>;
};

export default Label;