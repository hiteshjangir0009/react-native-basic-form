import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Form = ({
  data = [
    {
      lable: '',
      inputtext: { placeholder: '', value: '', onchangetext: () => {} },
      button: { lable: '', onPress: () => {} },
    },
  ],
  gap_bwt_keyValue,
  gap_bwt_keys,
  lable_style,
  inputtext_style,
  button_container_style,
  buttontext_style,
  placeholderTextColor,
}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: gap_bwt_keys || 12 }} />}
        renderItem={({ item, index }) => (
          <View style={{gap:gap_bwt_keyValue||10}}>
            {item.lable && (
              <Text style={[styles.lable, lable_style]}>{item.lable}</Text>
            )}

            {item.inputtext && (
              <TextInput
                style={[styles.inputtext, inputtext_style]}
                placeholderTextColor={placeholderTextColor || '#999'}
                placeholder={item.inputtext.placeholder}
                value={item.inputtext.value}
                onChangeText={val => item.inputtext.onchangetext(val)}
              />
            )}
            {item.button && (
              <TouchableOpacity
                onPress={item.button.onPress}
                style={[styles.button_container, button_container_style]}
              >
                <Text style={[styles.button_text, buttontext_style]}>
                  {item.button.lable}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  lable: {
    color: '#000',
    fontSize: 14,
  },
  inputtext: {
    color: '#000',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#b1b0b0',
    borderRadius: 10,
    padding:10
  },
  button_container: {},
  button_text: {
    color: '#000',
    fontSize: 14,
  },
});
