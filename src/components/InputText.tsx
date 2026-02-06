import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import FormText from './Text';
import { InputProps } from '../types';

const InputText:React.FC<InputProps> = ({
 label,
  style,
  labelStyle,
  ...textInputProps
}) => {
  return (
    <View>
      <TextInput
        {...textInputProps}     // 👈 forward EVERYTHING
        style={style}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({});
