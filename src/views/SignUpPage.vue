<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
      <form @submit.prevent="handleSignUp" class="space-y-4">
        <!-- Name Field -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <!-- Phone Number Field -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            id="phone"
            v-model="phone"
            type="tel"
            required
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
      <p class="text-sm text-center text-gray-600">
        Already have an account?
        <router-link to="/auth" class="text-blue-600 hover:underline">
          Sign In
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

export default {
  name: "SignUpPage",
  setup() {
    const name = ref("");
    const phone = ref("");
    const email = ref("");
    const password = ref("");

    const handleSignUp = async () => {
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );

        // Access the created user
        const user = userCredential.user;

        // Save additional details to Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: name.value,
          phone: phone.value,
          email: email.value,
          createdAt: new Date(),
        });

        alert("Account created successfully! You can now sign in.");

        // Reset fields
        name.value = "";
        phone.value = "";
        email.value = "";
        password.value = "";
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      name,
      phone,
      email,
      password,
      handleSignUp,
    };
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
