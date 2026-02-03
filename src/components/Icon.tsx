import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconProps } from '../types';

const Icon:React.FC<IconProps> = ({ icon,style }) => {
  return (
    <View>
      <Image
        style={[{
          height: 30,
          width: 30,
          objectFit: 'contain',
        },style]}
        source={icon}
      />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
