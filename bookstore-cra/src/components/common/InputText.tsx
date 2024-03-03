import React, { ForwardedRef } from "react";
import { styled } from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  // input 태그가 갖고 있는거 전부 상속받음
  placeholder?: string;
  inputType?: "text" | "email" | "password" | "number";
}

export const InputText = React.forwardRef(
  (
    { placeholder, inputType, onChange, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputTextStyle
        placeholder={placeholder}
        ref={ref}
        type={inputType}
        onChange={onChange}
        {...props}
      />
    );
  }
);

const InputTextStyle = styled.input`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
`;
