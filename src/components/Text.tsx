import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextProps } from '../types';

const FormText:React.FC<TextProps> = ({ label, style }) => {
  return (
    <View>
      <Text
        style={[
          {
            color: '#000',
          },
          style,
        ]}
      >
        {label || ' '}
      </Text>
    </View>
  );
};

export default FormText;

const styles = StyleSheet.create({});
