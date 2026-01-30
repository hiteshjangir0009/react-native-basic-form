import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import type { FormProps, FormItem } from "./types";

export const Form: React.FC<FormProps> = ({
  data,
  gap_bwt_keyValue = 10,
  gap_bwt_keys = 12,
  lable_style,
  inputtext_style,
  button_container_style,
  buttontext_style,
  placeholderTextColor = "#999",
  headerIcon,
  headerIcon_style,
  imageProps,
  flatlist
}) => {
  return (
    <View>
      {headerIcon && (
        <Image
          source={headerIcon}
          style={[styles.headericon, headerIcon_style]}
          {...imageProps}
        />
      )}
      <FlatList<FormItem>
        {...flatlist}
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: gap_bwt_keys }} />}
        renderItem={({ item }) => (
          <View style={{ gap: gap_bwt_keyValue }}>
            {item.label && (
              <Text style={[styles.lable, lable_style]}>{item.label}</Text>
            )}

            {item.input && (
              <TextInput
                style={[styles.inputtext, inputtext_style]}
                placeholder={item.input.placeholder}
                placeholderTextColor={placeholderTextColor}
                multiline={item.input.multiline}
                textAlignVertical={item.input.textAlignVertical}
                value={item.input.value}
                onChangeText={item.input.onChangeText}
                keyboardType={item.input.keyboardType}
              />
            )}

            {item.button && (
              <TouchableOpacity
                onPress={item.button.onPress}
                style={[styles.button_container, button_container_style]}
              >
                <Text style={[styles.button_text, buttontext_style]}>
                  {item.button.label}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lable: {
    color: "#000",
    fontSize: 14,
  },
  inputtext: {
    color: "#000",
    fontSize: 12,
    borderWidth: 1,
    borderColor: "#b1b0b0",
    borderRadius: 10,
    padding: 10,
  },
  button_container: {},
  button_text: {
    color: "#000",
    fontSize: 14,
  },
  headericon: {
    height: 30,
    width: 30,
    resizeMode:'contain'
  },
});
