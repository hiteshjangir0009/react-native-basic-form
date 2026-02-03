import type { ImageProps, ImageStyle, TextInputProps, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
type BaseField = {
    label?: string;
    spacing?: number;
    style?: ViewStyle;
    labelStyle?: TextStyle;
};
export type FormInput = BaseField & {
    type: 'input';
    inputProps?: TextInputProps;
};
export type FormButton = BaseField & {
    type: 'button';
    textStyle?: TextStyle;
    buttonProps?: {
        buttonText?: string;
        onPress?: TouchableOpacityProps['onPress'];
    };
};
export type FormField = FormInput | FormButton;
export type FormItem = {
    layout?: ViewStyle['flexDirection'];
    spacing?: number;
    children: FormField[];
};
export type FormProps = {
    schema: FormItem[];
};
export type ButtonProps = {
    label?: string;
    buttonText?: string;
    onPress?: TouchableOpacityProps['onPress'];
    style?: ViewStyle;
    textStyle?: TextStyle;
    spacing?: number;
    labelStyle?: TextStyle;
};
export type InputProps = {
    label?: string;
    style?: TextInputProps['style'];
    spacing?: number;
    labelStyle?: TextStyle;
    placeholder?: TextInputProps['placeholder'];
    value?: TextInputProps['value'];
    onChangeText?: TextInputProps['onChangeText'];
};
export type IconProps = {
    icon?: ImageProps['source'];
    style?: ImageStyle;
};
export type TextProps = {
    label?: string;
    style?: TextStyle;
};
export {};
