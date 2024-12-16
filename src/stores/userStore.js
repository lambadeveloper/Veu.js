import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, // User details
    token: null, // Authentication token
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user-data",
        storage: localStorage, // or sessionStorage
      },
    ],
  },
  actions: {
    setUser(userData) {
      this.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
    },
    loadUser() {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      if (user && token) {
        this.user = JSON.parse(user);
        this.token = token;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
