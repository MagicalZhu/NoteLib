import React from 'react';

const FontExt = ({children, color}) => {
  let renderValue = children
  return (
    <span
    style={{
      color: color
    }}>
    {renderValue}
    </span> 
  )
}

const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


export {FontExt}