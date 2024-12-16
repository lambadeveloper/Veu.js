<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-colors duration-150 ease-in-out',
      buttonStyles,
      sizeClass,
      { 'cursor-not-allowed opacity-50': disabled },
    ]"
    :style="{ backgroundColor }"
    :disabled="disabled"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    label: {
      type: String,
      default: "Button",
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    backgroundColor: {
      type: String,
      default: null,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonStyles() {
      return this.primary
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-red-500 text-white hover:bg-red-600";
    },
    sizeClass() {
      return {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      }[this.size];
    },
  },
  methods: {
    onClick(event) {
      this.$emit("onClick", event);
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
}
</style>
