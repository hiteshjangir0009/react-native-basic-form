# 🚀 React Native Basic Form

### Control your entire form using JSON — not JSX.

Building forms in React Native usually means writing repetitive JSX, duplicating layouts, and touching UI code for every small change. As apps grow, forms become hard to maintain, hard to reuse, and hard to scale.

**React Native Basic Form solves this problem by turning forms into data.**

Instead of hardcoding inputs, buttons, and layouts, you describe your form using a **JSON schema**.  
The renderer stays the same — **only the JSON changes**.

---

## ❌ The Problem

- Forms are tightly coupled to JSX
- Layout changes require code changes
- Reusing forms across screens is painful
- Dynamic or server-driven forms are difficult
- UI logic and structure get mixed together

As a result, forms often become one of the **least maintainable parts** of an app.

---

## ✅ The Solution

**React Native Basic Form** lets you control **everything about a form through JSON**:

- what fields exist
- how they are grouped
- how they are laid out
- how they behave
- how they look

Change the JSON → the form changes.  
No JSX rewrites. No duplicated components.

A **schema-driven, fully customizable form renderer for React Native**.

> This library does **not** manage form state, validation, or translations.  
> It only renders what you describe.

---

## 🎯 Who This Is For

- Apps with many forms
- Admin panels & dashboards
- Server-driven or config-based UIs
- Teams that want consistent form behavior
- Developers who prefer data-driven UI

---

## ✨ Features

- 🧩 **Schema-based rendering**
- 📐 **Row / Column layouts**
- 🎨 **Field-level & block-level styling**
- 🧠 **No internal state** (you control values & handlers)
- 🌍 **Language-agnostic** (i18n handled by user)
- 🛡 **Type-safe** with TypeScript
- 🧱 **Easily extensible** (add new field types)

---

## 📦 Installation

```sh
npm install @hitesh0009/react-native-basic-form
````

or

```sh
yarn add @hitesh0009/react-native-basic-form
```

---

## 🚀 Quick Start

### 1️⃣ Import the `Form` component

```tsx
import { Form } from '@hitesh0009/react-native-basic-form';
```

---

### 2️⃣ Create a schema

```ts
const formSchema = [
  {
    layout: 'column',
    spacing: 20,
    style: { padding: 16 }, // block-level styling
    children: [
      {
        type: 'text',
        label: 'Contact Information',
        labelStyle: { fontSize: 18, fontWeight: '600' },
      },
      {
        type: 'input',
        label: 'Contact Person Name',
        inputProps: {
          placeholder: "Enter contact person's full name",
          onChangeText: text => console.log(text),
        },
      },
      {
        type: 'input',
        label: 'Phone Number',
        inputProps: {
          placeholder: '+91 Enter phone number',
          keyboardType: 'phone-pad',
        },
      },
      {
        type: 'button',
        label: 'Save',
        buttonProps: {
          buttonText: 'Save',
          onPress: () => console.log('Submitted'),
        },
      },
    ],
  },
];
```

---

### 3️⃣ Render the form

```tsx
<Form schema={formSchema} />
```

That’s it.

---

## 🧠 Core Concepts

### 1. Schema-Driven UI

You describe **what** the UI should look like:

```ts
{
  type: 'input',
  label: 'Name'
}
```

The form renderer handles **how** it is rendered.

---

### 2. Layout Blocks

Each schema block controls grouping and layout.

```ts
{
  layout: 'row',
  spacing: 12,
  style: { alignItems: 'center' },
  children: [...]
}
```

Supported layouts:

* `column`
* `row`

---

### 3. Fields

Each item inside `children` is a **field**.

Supported field types:

* `text`
* `input`
* `button`

---

## 🧩 Field Types

### 🔹 Text Field (Label / Header / Helper)

```ts
{
  type: 'text',
  label: 'Preferred Train Type',
  labelStyle: { fontSize: 16, fontWeight: '500' },
}
```

Used for:

* section headers
* group labels
* instructions
* helper text

---

### 🔹 Input Field

```ts
{
  type: 'input',
  label: 'Age',
  spacing: 8,
  style: { borderColor: '#16a34a' },
  inputProps: {
    placeholder: 'Enter age',
    keyboardType: 'numeric',
    onChangeText: text => console.log(text),
  },
}
```

All standard **React Native `TextInputProps`** are supported via `inputProps`.

---

### 🔹 Button Field

```ts
{
  type: 'button',
  label: 'Submit',
  spacing: 12,
  style: { backgroundColor: '#2563eb' },
  textStyle: { fontSize: 16 },
  buttonProps: {
    buttonText: 'Submit',
    onPress: () => console.log('Pressed'),
  },
}
```

All standard **`TouchableOpacity` props** are supported via `buttonProps`.

---

## 🎨 Styling & Spacing

Styling is **fully user-controlled**.

### Field-level props

| Prop         | Description                   |
| ------------ | ----------------------------- |
| `style`      | Field container style         |
| `textStyle`  | Button text style             |
| `labelStyle` | Label text style              |
| `spacing`    | Space between label and field |

### Block-level props

| Prop      | Description                        |
| --------- | ---------------------------------- |
| `layout`  | `row` or `column`                  |
| `spacing` | Space between fields               |
| `style`   | Wrapper `View` style for the block |

---

## 🌍 Internationalization (i18n)

This library is **language-agnostic**.

You can pass translated strings directly:

```ts
label: t('contact_name')
```

No translation logic is included.

---

## 🧱 TypeScript Support

The library exposes a **strict, typed schema contract**.

```ts
export type FormItem = {
  layout?: 'row' | 'column';
  spacing?: number;
  style?: ViewStyle;
  children: FormField[];
};
```

TypeScript will:

* prevent invalid schemas
* autocomplete valid props
* catch mistakes at compile time

---

## 🧠 Design Philosophy

* ❌ No internal form state
* ❌ No validation logic
* ❌ No opinionated UI
* ✅ You control values & handlers
* ✅ Schema is the single source of truth

> **This library is a render engine, not a form framework.**

---

## 🔧 Extending the Form

To add new field types (e.g. `checkbox`, `radioGroup`, `select`):

1. Extend the schema type
2. Add a case in the renderer
3. Plug in your component

No breaking changes required.

---

## 🧪 What This Library Is NOT

* ❌ Not a validation framework
* ❌ Not a form state manager
* ❌ Not a UI kit

It focuses on **rendering**, not logic.

---

## 🛣 Roadmap

* Conditional rendering
* Repeatable field groups
* Grid layouts
* Validation helpers
* Visual form builder

---

## 🤝 Contributing

Contributions are welcome.

Please keep PRs:

* simple
* schema-driven
* backward-compatible

---

## 📄 License

MIT
