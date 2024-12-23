<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800">Sign In</h2>
      <form @submit.prevent="handleSignIn" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
      <p class="text-sm text-center text-gray-600">
        Don't have an account?
        <router-link to="/signup" class="text-blue-600 hover:underline">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useUserStore } from "../stores/userStore";
import { useRouter } from "vue-router";

export default {
  name: "AuthPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const userStore = useUserStore();
    const router = useRouter();

    const handleSignIn = async () => {
      try {
        const res = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = res.user;

        // Fetch token and user details from Firestore
        const token = await user.getIdToken();
        const userDoc = await getDoc(doc(getFirestore(), "users", user.uid));

        if (userDoc.exists()) {
          const userData = userDoc.data();

          // Save user details and token to Pinia store
          userStore.setUser({
            uid: user.uid,
            email: user.email,
            name: userData.name,
            phone: userData.phone,
          });
          userStore.setToken(token);

          // Redirect to dashboard
          router.push("/dashboard");
        } else {
          alert("User details not found in the database.");
        }
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      email,
      password,
      handleSignIn,
    };
  },
};
</script>

<style scoped></style>
