import { EmailInput as YA_EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent } from 'react';

export interface IEmailInputProps {
  value: string;
  name: string;
  size?: "small" | "default" | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Primary UI component for user interaction
 */
export function EmailInput(props: IEmailInputProps): JSX.Element {
  return (
    <YA_EmailInput {...props} />
  );
};
