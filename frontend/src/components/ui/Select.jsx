// src/components/ui/Select.jsx
import React from 'react';

export default function Select({ options, value, onChange, className }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`border p-2 rounded-md ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
