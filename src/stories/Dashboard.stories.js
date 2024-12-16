import Dashboard from "./Dashboard.vue";

export default {
  title: "Page/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  argTypes: {
    user: {
      control: "object",
      description: "User information displayed on the dashboard.",
    },
    onLogout: {
      action: "onLogout",
      description: "Function called when the Logout button is clicked.",
    },
  },
};

const Template = (args) => ({
  components: { Dashboard },
  setup() {
    return { args };
  },
  template: '<Dashboard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  user: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  },
};

export const CustomUser = Template.bind({});
CustomUser.args = {
  user: {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "+9876543210",
  },
};
