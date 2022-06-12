<template>
  <div
    class="flex items-center justify-center fixed top-0 left-0 w-full h-full z-10"
    role="dialog"
  >
    <div
      class="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full"
      role="overlay"
      @click="$emit('cancel')"
    />
    <div
      class="relative w-[50rem] max-w-[90vw] bg-white p-8 overflow-y-scroll h-[80vh]"
    >
      <button class="icon absolute top-4 right-4" @click="$emit('cancel')">
        <span class="material-symbols-outlined">close</span>
      </button>
      <slot></slot>
    </div>
  </div>
</template>
