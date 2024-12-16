import SignInPage from "./SignInPage.vue";
import { ref } from "vue";

export default {
  title: "Auth/SignInPage",
  component: SignInPage,
  tags: ["autodocs"],
  argTypes: {
    email: {
      control: "text",
      description: "Email input value",
    },
    password: {
      control: "text",
      description: "Password input value",
    },
    onSubmit: {
      action: "handleSignIn",
      description: "Callback when form is submitted",
    },
  },
};

const Template = (args) => ({
  components: { SignInPage },
  setup() {
    const email = ref(args.email || ""); // Default value
    const password = ref(args.password || ""); // Default value

    const handleSignIn = () => {
      args.onSubmit({ email: email.value, password: password.value });
    };

    return { email, password, handleSignIn };
  },
  template: `
    <SignInPage
      :email="email"
      :password="password"
      @handleSignIn="handleSignIn"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  email: "default@example.com", // Default email
  password: "defaultpassword", // Default password
};

export const EmptyForm = Template.bind({});
EmptyForm.args = {
  email: "",
  password: "",
};

export const FilledForm = Template.bind({});
FilledForm.args = {
  email: "user@example.com",
  password: "userpassword",
};
