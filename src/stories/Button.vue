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
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script>
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
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
  setup(props, { emit }) {
    const { label, size, backgroundColor, primary, disabled } = toRefs(props);

    const buttonStyles = computed(() => {
      return primary.value 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-red-500 text-white hover:bg-red-600';
    });

    const sizeClass = computed(() => {
      return {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      }[size.value];
    });

    const handleClick = (event) => {
      emit('onClick', event);
    };

    return {
      label,
      size,
      backgroundColor,
      primary,
      disabled,
      buttonStyles,
      sizeClass,
      handleClick
    };
  },
});
</script>

<style scoped>
button {
  border: none;
  outline: none;
}
</style>
