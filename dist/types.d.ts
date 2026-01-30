import type { FlatListProps, ImageProps, ImageSourcePropType, ImageStyle, TextInputProps, TextStyle, ViewStyle } from "react-native";
export type FormInput = {
    placeholder?: string;
    value: string;
    onChangeText: TextInputProps["onChangeText"];
    multiline?: TextInputProps["multiline"];
    textAlignVertical?: TextInputProps["textAlignVertical"];
    keyboardType?: TextInputProps["keyboardType"];
};
export type FormButton = {
    label: string;
    onPress: () => void;
};
export type FormItem = {
    id: string;
    label?: string;
    input?: FormInput;
    button?: FormButton;
};
export type FormProps = {
    data: FormItem[];
    gap_bwt_keyValue?: number;
    gap_bwt_keys?: number;
    lable_style?: TextStyle;
    inputtext_style?: TextStyle;
    button_container_style?: ViewStyle;
    buttontext_style?: TextStyle;
    placeholderTextColor?: string;
    headerIcon?: ImageSourcePropType | undefined;
    headerIcon_style?: ImageStyle;
    imageProps?: ImageProps;
    numColumns?: number;
    flatlist?: FlatListProps<FormItem>;
};
