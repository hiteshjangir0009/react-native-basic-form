import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import FormText from './Text';
import { InputProps } from '../types';

const InputText:React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  style,
  spacing,
  labelStyle,
}) => {
  return (
    <View style={{ gap: spacing || 13 }}>
      <FormText label={label || ' '} style={labelStyle} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[
          {
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            borderRadius: 6,
          },
          style,
        ]}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({});
