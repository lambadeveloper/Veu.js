<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800">Sign In</h2>
      <form @submit.prevent="handleSignIn" class="space-y-4">
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
import { ref } from 'vue';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'SignInPage',
  setup() {
    const email = ref('');
    const password = ref('');

    const handleSignIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        alert(`Welcome, ${user.email}!`);
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    };

    return {
      email,
      password,
      handleSignIn
    };
  }
};
</script>
