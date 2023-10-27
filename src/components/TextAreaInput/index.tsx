import { TextInputProps } from 'react-native';
import { Input } from './styles';

export function TextAreaInput({ ...rest }: TextInputProps) {
  return (
    <Input
      multiline
      autoCapitalize='sentences'
      {...rest}
    />
  );
}