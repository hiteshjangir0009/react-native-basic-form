import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
const Icon = ({ icon, style }) => {
    return (<View>
      <Image style={[{
                height: 30,
                width: 30,
                objectFit: 'contain',
            }, style]} source={icon}/>
    </View>);
};
export default Icon;
const styles = StyleSheet.create({});
