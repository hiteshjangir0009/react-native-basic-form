import React, { useState } from "react";
import { View } from "react-native";
import { Form } from "react-native-basic-form";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={{ padding: 16 }}>
      <Form
        data={[
          {
            id: "name",
            label: "Name",
            input: {
              placeholder: "Enter your name",
              value: name,
              onChangeText: ()=>{},
            },
            button: {
              lable: "name",
              onPress: () => {},
            },
          },
        ]}
      />
    </View>
  );
}
