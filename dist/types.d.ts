import type { TextStyle, ViewStyle } from "react-native";
export type FormInput = {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    multiline: boolean;
    TextAlignVertical?: "top" | "center" | "bottom" | "auto" | undefined;
    keybordType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad" | "url" | "ascii-capable" | "numbers-and-punctuation" | "name-phone-pad" | "twitter" | "web-search" | "visible-password";
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
    scrollEnabled?: boolean;
    showsHorizontalScrollIndicator?: boolean;
};
