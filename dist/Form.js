import { View } from "react-native";
import React from "react";
import InputText from "./components/InputText";
import Buttons from "./components/Buttons";
import FormText from "./components/Text";
export const Form = ({ schema = [] }) => {
    const renderField = (field, index) => {
        var _a, _b;
        switch (field.type) {
            case "text":
                return (<FormText key={index} label={field.label} style={field.labelStyle}/>);
            case "button":
                return (<View key={index} style={{ gap: (_a = field.spacing) !== null && _a !== void 0 ? _a : 13 }}>
            {field.label && (<FormText label={field.label} style={field.labelStyle}/>)}
            <Buttons style={field.style} textStyle={field.textStyle} {...(field.buttonProps || {})}/>
          </View>);
            case "input":
                return (<View key={index} style={{ gap: (_b = field.spacing) !== null && _b !== void 0 ? _b : 13 }}>
            {field.label && (<FormText label={field.label} style={field.labelStyle}/>)}
            <InputText style={field.style} {...(field.inputProps || {})}/>
          </View>);
            default:
                return null;
        }
    };
    return (<>
      {schema.map((block, blockIndex) => {
            var _a, _b;
            return (<View key={blockIndex} style={[
                    {
                        flexDirection: (_a = block.layout) !== null && _a !== void 0 ? _a : "column",
                        gap: (_b = block.spacing) !== null && _b !== void 0 ? _b : 20,
                    },
                    block.style,
                ]}>
          {block.children.map(renderField)}
        </View>);
        })}
    </>);
};
