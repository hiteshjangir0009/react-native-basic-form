import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
const InputText = ({ label, style, labelStyle, ...textInputProps }) => {
    return (<View>
      <TextInput {...textInputProps} // 👈 forward EVERYTHING
     style={style}/>
    </View>);
};
export default InputText;
const styles = StyleSheet.create({});
