import type { ImageProps, ImageStyle, TextInputProps, TextProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
type BaseField = {
    label?: string;
    spacing?: number;
    style?: ViewStyle;
    labelStyle?: TextStyle;
};
export type FormInput = BaseField & {
    type: "input";
    inputProps?: TextInputProps;
};
export type FormText = BaseField & {
    type: "text";
    textProps?: TextProps;
};
export type FormButton = BaseField & {
    type: "button";
    textStyle?: TextStyle;
    buttonProps?: {
        buttonText?: string;
        onPress?: TouchableOpacityProps["onPress"];
    };
};
export type FormField = FormInput | FormButton | FormText;
export type FormItem = {
    layout?: ViewStyle["flexDirection"];
    spacing?: number;
    style?: ViewStyle;
    children: FormField[];
};
export type FormProps = {
    schema: FormItem[];
};
export type ButtonProps = {
    label?: string;
    buttonText?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    spacing?: number;
    labelStyle?: TextStyle;
} & TouchableOpacityProps;
export type InputProps = {
    label?: string;
    style?: TextInputProps["style"];
    spacing?: number;
    labelStyle?: TextStyle;
    placeholder?: TextInputProps["placeholder"];
    value?: TextInputProps["value"];
    onChangeText?: TextInputProps["onChangeText"];
} & TextInputProps;
export type IconProps = {
    icon?: ImageProps["source"];
    style?: ImageStyle;
};
export type FormTextProps = {
    label?: string;
    style?: TextStyle;
} & TextProps;
export {};
