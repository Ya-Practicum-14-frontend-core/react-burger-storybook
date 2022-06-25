import React, { ChangeEvent } from "react";
import { PasswordInput as YA_PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

export interface IPasswordInputProps {
  value: string;
  name: string;
  size?: "small" | "default" | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Primary UI component for user interaction
 */
export function PasswordInput(props: IPasswordInputProps): JSX.Element {
  return <YA_PasswordInput {...props} />;
}
