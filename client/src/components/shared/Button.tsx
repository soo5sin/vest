import { ButtonHTMLAttributes, ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | string;
  colorTheme?: 'default' | 'lightGreen' | 'white' | 'gray';
  size?: 'small' | 'medium' | 'large';
  borderRadius?: string;
}

const ButtonStyleOption = {
  size: {
    small: '0.4rem',
    medium: '0.8rem',
    large: '1.7rem',
  },
  fontSize: {
    small: '1rem',
    medium: '1.3rem',
    large: '1.7rem',
  },
  default: {
    backgroundColor: '#4da64d',
    color: '#ffffff',
  },
  lightGreen: {
    backgroundColor: '#b3d9b3',
    color: '#515151',
  },
  white: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  gray: {
    backgroundColor: '#f7f7f7',
    color: '#313131',
  },
};

const Button = ({
  colorTheme = 'default',
  size = 'medium',
  children,
  borderRadius,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button colorTheme={colorTheme} size={size} borderRadius={borderRadius} {...rest}>
      {children}
    </S.Button>
  );
};

const S = {
  Button: styled.button<ButtonProps>`
    ${({ colorTheme = 'default', size = 'medium', borderRadius }) => css`
      width: 100%;
      padding: ${ButtonStyleOption.size[size]};
      background-color: ${ButtonStyleOption[colorTheme].backgroundColor};
      color: ${ButtonStyleOption[colorTheme].color};
      border-radius: ${borderRadius};
      font-weight: bold;
    `}
  `,
};

export default Button;
