import { fn } from "@storybook/test";
import MyButton from "./Button.vue";

export default {
  title: "Components/Button",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    backgroundColor: { control: "color" },
    primary: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    onClick: fn(),
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Sign In",
    backgroundColor: "#2563eb",
  },
};

export const Secondary = {
  args: {
    label: "Logout",
    backgroundColor: "#ef4444",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Small Button",
  },
};
