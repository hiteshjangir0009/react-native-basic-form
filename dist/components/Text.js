import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const FormText = ({ label, style }) => {
    return (<View>
      <Text style={[
            {
                color: '#000',
            },
            style,
        ]}>
        {label || ' '}
      </Text>
    </View>);
};
export default FormText;
const styles = StyleSheet.create({});
