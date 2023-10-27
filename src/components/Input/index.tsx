import { TextInputProps } from 'react-native';

import { TextInput } from './styles';

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput 
      {...rest}
    />
  );
}