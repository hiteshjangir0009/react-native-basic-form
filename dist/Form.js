import { View } from "react-native";
import React from "react";
import InputText from "./components/InputText";
import Buttons from "./components/Buttons";
export const Form = ({ schema = [] }) => {
    const RenderField = (field, index) => {
        switch (field.type) {
            case "button":
                return (<Buttons key={index} label={field.label} style={field.style} textStyle={field.textStyle} spacing={field.spacing} {...(field.buttonProps || {})}/>);
            case "input":
                return (<InputText key={index} label={field.label} style={field.style} spacing={field.spacing} {...(field.inputProps || {})}/>);
            default:
                return null;
        }
    };
    return (<>
      {schema.map((block, blockIndex) => (<View key={blockIndex} style={{
                flexDirection: block.layout || "column",
                gap: block.spacing || 20,
            }}>
          {block.children.map(RenderField)}
        </View>))}
    </>);
};
