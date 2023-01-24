import { ButtonHTMLAttributes, ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | string;
  colorTheme?: 'default' | 'mint';
  size?: 'small' | 'medium' | 'large';
  borderRadius?: string;
}

const ButtonStyleOption = {
  size: {
    small: '0.4rem',
    medium: '1rem',
    large: '1.7rem',
  },
  fontSize: {
    small: '1rem',
    medium: '1.3rem',
    large: '1.7rem',
  },
  default: {
    backgroundColor: '#091E3B',
    color: '#ffffff',
  },
  mint: {
    backgroundColor: '#00e2ed',
    color: '#000000',
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
    ${({ colorTheme = 'mint', size = 'medium', borderRadius }) => css`
      width: 100%;
      padding: ${ButtonStyleOption.size[size]};
      background-color: ${ButtonStyleOption[colorTheme].backgroundColor};
      color: ${ButtonStyleOption[colorTheme].color};
      border-radius: ${borderRadius};
    `}
  `,
};

export default Button;
