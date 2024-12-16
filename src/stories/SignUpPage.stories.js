import SignUpPage from "./SignUpPage.vue";

export default {
  title: "Auth/SignUpPage",
  component: SignUpPage,
  tags: ["autodocs"],
  argTypes: {
    user: {
      control: "object",
      description: "User details for signing up.",
    },
    handleSignUp: {
      action: "handleSignUp",
      description: "Function triggered on form submission.",
    },
  },
};

const Template = (args) => ({
  components: { SignUpPage },
  setup() {
    return { args };
  },
  template: '<SignUpPage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
  phone: "+1234567890",
  email: "johndoe@example.com",
  password: "password123",
};
