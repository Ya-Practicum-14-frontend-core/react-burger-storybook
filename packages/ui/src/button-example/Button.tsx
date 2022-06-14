import React from 'react';


import './button.css';

interface ButtonProps {
  type: "primary" | "secondary" | "danger" | "success"; 
  accLeft?: JSX.Element | string; 
  accRight?: JSX.Element | string; 
  block: boolean; 
  disabled?: boolean; 
  isLoading?: boolean; 
  onClick?: () => void; 
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type,
  accLeft,
  accRight,
  block = false,
  disabled = false,
  isLoading = false,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = type === 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${block ? 'wide' : 'normal'}`, mode].join(' ')}
      {...onClick}
      {...props}
    >
      Кнопка
    </button>
  );
};
