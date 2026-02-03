import React, { useState } from "react";
import { View } from "react-native";
import { Form } from "react-native-basic-form";

export default function App() {
  // 👉 Form state is owned by YOU, not by the Form component
  // The library is stateless by design
  const [name, setName] = useState("");

  // 👉 Schema controls the entire form UI
  // Changing this JSON changes the form
  const formSchema = [
    {
      // Layout block: controls how children are arranged
      layout: "column",
      spacing: 16, // space between fields

      // Children = actual form fields
      children: [
        {
          // Input field
          type: "input",
          label: "Name",

          // All TextInput behavior goes inside inputProps
          inputProps: {
            placeholder: "Enter your name",
            value: name,          // controlled value
            onChangeText: setName // update state
          },
        },

        {
          // Button field
          type: "button",
          label: "Submit",

          // Button behavior goes inside buttonProps
          buttonProps: {
            buttonText: "Submit",
            onPress: () => {
              // Access state directly
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
        👉 Form only renders what the schema describes
        👉 No internal state, no validation, no logic
      */}
      <Form schema={formSchema} />
    </View>
  );
}
