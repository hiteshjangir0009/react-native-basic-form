import React, { useState } from "react";
import { View } from "react-native";
import { Form } from "react-native-basic-form";

export default function App() {
  /**
   * ✅ Form state is owned by YOU
   * This library is intentionally stateless.
   */
  const [name, setName] = useState("");

  /**
   * ✅ Schema controls the entire form UI
   * Change this JSON → the form UI updates automatically
   */
  const formSchema = [
    {
      /**
       * Layout block
       * Controls grouping, direction, and spacing
       */
      layout: "column",
      spacing: 16,

      children: [
        {
          /**
           * Text field
           * Used for headings, labels, instructions, or helper text
           */
          type: "text",
          label: "User Information",
          labelStyle: {
            fontSize: 18,
            fontWeight: "600",
          },
        },

        {
          /**
           * Input field
           */
          type: "input",
          label: "Name",

          /**
           * All TextInput behavior lives inside inputProps
           */
          inputProps: {
            placeholder: "Enter your name",
            value: name,
            onChangeText: setName,
          },
        },

        {
          /**
           * Button field
           */
          type: "button",
          label: "Submit",

          /**
           * All TouchableOpacity behavior lives inside buttonProps
           */
          buttonProps: {
            buttonText: "Submit",
            onPress: () => {
              console.log("Name:", name);
            },
          },
        },
      ],
    },
  ];

  return (
    <View style={{ padding: 16 }}>
      {/*
        ✅ Form is just a renderer
        - No internal state
        - No validation
        - No logic
      */}
      <Form schema={formSchema} />
    </View>
  );
}
