import { View } from "react-native";
import React from "react";
import InputText from "./components/InputText";
import Buttons from "./components/Buttons";
import { FormField, FormProps } from "./types";
import FormText from "./components/Text";

export const Form: React.FC<FormProps> = ({ schema = [] }) => {
  const renderField = (field: FormField, index: number) => {
    switch (field.type) {
      case "text":
        return (
          <FormText
            key={index}
            label={field.label}
            style={field.labelStyle}
          />
        );

      case "button":
        return (
          <View key={index} style={{ gap: field.spacing ?? 13 }}>
            {field.label && (
              <FormText label={field.label} style={field.labelStyle} />
            )}
            <Buttons
              style={field.style}
              textStyle={field.textStyle}
              {...(field.buttonProps || {})}
            />
          </View>
        );

      case "input":
        return (
          <View key={index} style={{ gap: field.spacing ?? 13 }}>
            {field.label && (
              <FormText label={field.label} style={field.labelStyle} />
            )}
            <InputText
              style={field.style}
              {...(field.inputProps || {})}
            />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {schema.map((block, blockIndex) => (
        <View
          key={blockIndex}
          style={[
            {
              flexDirection: block.layout ?? "column",
              gap: block.spacing ?? 20,
            },
            block.style,
          ]}
        >
          {block.children.map(renderField)}
        </View>
      ))}
    </>
  );
};
