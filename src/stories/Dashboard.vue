<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="shadow-sm bg-gradient-to-r from-blue-600 to-blue-700">
      <div
        class="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <h1 class="font-medium text-white">
          Welcome, <span class="font-semibold">{{ user.name }}</span>
        </h1>
        <button
          class="px-4 py-2 text-sm font-medium text-white transition-colors duration-150 ease-in-out bg-red-500 rounded-md hover:bg-red-600"
          @click="onLogout"
        >
          Logout
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="p-6 space-y-4 bg-white rounded-lg shadow-sm">
        <!-- Email Section -->
        <div class="space-y-1">
          <p class="text-sm font-medium text-gray-500">Email</p>
          <p class="text-gray-900">
            <a
              :href="`mailto:${user.email}`"
              class="transition-colors duration-150 hover:text-blue-600"
            >
              {{ user.email }}
            </a>
          </p>
        </div>

        <!-- Phone Section -->
        <div class="space-y-1">
          <p class="text-sm font-medium text-gray-500">Phone</p>
          <p class="text-gray-900">
            <a
              :href="`tel:${user.phone}`"
              class="transition-colors duration-150 hover:text-blue-600"
            >
              {{ user.phone }}
            </a>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
      }),
    },
    onLogout: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add scoped styles if necessary */
</style>
