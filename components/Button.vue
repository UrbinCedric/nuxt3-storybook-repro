<script setup lang="ts">

/******* Just a random test to use the nuxt composables, code makes no sense! *********/
//const openFab = useState('openModal', () => false);

/******* Just a random test to use the vue composables, code makes no sense! *********/
const classes = computed(() => [
  "computed-asshole",
  { "anything": 1 },
  { "irandom": 2 },
]);

/******** PROPS AND EMITS START ********/
interface Props {
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: string;
  buttonClass?: string;
  dataCy?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "tonal",
  type: "button",
});

const emits = defineEmits(["onClick"]);
/******** PROPS AND EMITS END ********/

const emitFunction = () => {
  if (props.disabled) return;
  emits("onClick");
};

const removeFocus = () => {
  document.activeElement?.blur();
};
</script>

<template>
  <div class="button-wrapper">
    <button :class="[buttonClass, variant, icon ? 'has-icon' : 'no-icon']" :type="type" :disabled="disabled"
      @click="emitFunction" @mouseup="removeFocus" :data-cy="dataCy">
      <Icon v-if="icon" :icon="icon" class="icon" width="18" />
      <label class="label-large">
        <slot />
      </label>
    </button>
  </div>
</template>

<style scoped>
/* Main parent element */
div.button-wrapper {
  display: inline-block;
}

/* Button presets */
button {
  border-radius: 20px;
  height: 40px;
  padding-right: 24px;
  border: none;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

/* ### Icon toggle classes ### */
button.has-icon {
  padding-left: 16px;
  gap: 8px;
}

button.no-icon {
  padding-left: 24px;
}

button:not(:disabled)>*:hover {
  cursor: pointer;
}

button:hover:not(:disabled) {
  cursor: pointer;
}

/* ### State Layers ### */
/* outlined to be handled without standard outlines */
button:hover,
button:focus,
button:active,
button:disabled,
button.outlined {
  box-shadow: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

button:hover:not(.outlined, :disabled)::after,
button:focus:not(.outlined, :disabled)::after,
button:active:not(.outlined, :disabled)::after,
button:disabled:not(.outlined)::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

button:hover:not(:disabled)::after {
  opacity: 0.08;
}

button:focus:not(:disabled)::after,
button:active:not(:disabled)::after {
  opacity: 0.12;
}

button:disabled::after {
  opacity: 0.16;
}

/* Disabled presets */
button:disabled {
  opacity: 0.38;
  cursor: auto;
}

/* Elevated buttons */
button.elevated:not(:disabled) {
  background-color: var(--md-sys-color-surface-container-low);
  color: var(--md-sys-color-primary);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition: 0.3s ease;
}

button.elevated:hover:not(:disabled) {
  color: var(--md-sys-color-primary);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
}

button.elevated:not(:disabled)::after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--md-sys-color-surface-container-low);
  transition: 0.3s ease;
  opacity: 0;
  z-index: -1;
}

button.elevated:hover:not(:disabled)::after {
  background-color: var(--md-sys-color-primary);
  opacity: 0.08;
}

button.elevated:focus:not(:disabled)::after,
button.elevated:active:not(:disabled)::after {
  background-color: var(--md-sys-color-primary);
  opacity: 0.12;
}

button.elevated:disabled {
  opacity: 0.38;
  color: var(--md-sys-color-on-surface);
}

button.elevated:disabled::after {
  background-color: var(--md-sys-color-on-surface);
  opacity: 0.16;
}

/* Filled buttons */
/* DONE */
button.filled:not(:disabled) {
  background-color: var(--md-sys-color-primary);
  box-shadow: var(--md-sys-color-shadow);
  color: var(--md-sys-color-on-primary);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition: 0.3s ease;
}

button.filled:hover:not(:disabled) {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
}

button.filled:not(:disabled)::after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--md-sys-color-primary);
  transition: 0.3s ease;
  opacity: 0;
  z-index: -1;
}

button.filled:hover:not(:disabled)::after {
  background-color: var(--md-sys-color-on-primary);
  opacity: 0.08;
}

button.filled:focus:not(:disabled)::after,
button.filled:active:not(:disabled)::after {
  background-color: var(--md-sys-color-on-primary);
  opacity: 0.12;
}

button.filled:disabled {
  color: var(--md-sys-color-on-surface);
  opacity: 0.38;
}

button.filled:disabled::after {
  background-color: var(--md-sys-color-on-surface);
  opacity: 0.16;
}

/* (Filled) Tonal buttons */
/* DONE */
button.tonal:not(:disabled) {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  transition: 0.3s ease;
}

button.tonal:not(:disabled)::after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--md-sys-color-secondary-container);
  transition: 0.3s ease;
  opacity: 0;
  z-index: -1;
}

button.tonal:hover:not(:disabled)::after,
button.tonal:focus:not(:disabled)::after,
button.tonal:active:not(:disabled)::after {
  background-color: var(--md-sys-color-on-secondary-container);
  opacity: 0.08;
}

button.tonal:focus:not(:disabled)::after,
button.tonal:active:not(:disabled)::after {
  background-color: var(--md-sys-color-on-secondary-container);
  opacity: 0.12;
}

button.tonal:disabled {
  opacity: 0.38;
  color: var(--md-sys-color-on-surface);
}

button.tonal:disabled::after {
  background-color: var(--md-sys-color-on-surface);
  opacity: 0.16;
}

/* TO BE DONE Missing outlines */
/* Outlined buttons */
button.outlined {
  background-color: transparent;
  color: var(--md-sys-color-primary);
  overflow: hidden;
  border: var(--md-sys-color-outline) solid 1px;
  transition: 0.3s ease;
}

button.outlined::after {
  content: "";
  z-index: -1;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background-color: transparent;
  opacity: 0;
  transition: 0.3s ease;
}

button.outlined:hover:not(:disabled)::after {
  background-color: var(--md-sys-color-primary);
  opacity: 0.08;
}

button.outlined:active:not(:disabled)::after,
button.outlined:focus:not(:disabled)::after {
  background-color: var(--md-sys-color-primary);
  opacity: 0.12;
}

button.outlined:disabled {
  border: var(--md-sys-color-on-surface) solid 1px;
  color: var(--md-sys-color-on-surface);
}

/* Text buttons */
/* DONE */
button.text:not(:disabled) {
  color: var(--md-sys-color-primary);
  background-color: transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition: 0.3s ease;
}

button.text:not(:disabled)::after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background-color: transparent;
  transition: 0.3s ease;
  opacity: 0;
  z-index: -1;
}

button.text:hover:not(:disabled)::after {
  background-color: var(--md-sys-color-primary);
  opacity: 0.08;
}

button.text:focus:not(:disabled)::after,
button.text:active:not(:disabled)::after {
  background-color: var(--md-sys-color-primary);
  opacity: 0.12;
}

button.text:disabled {
  background-color: transparent;
}

button.text:disabled::after {
  background-color: transparent;
}

button.text:disabled {
  color: var(--md-sys-color-on-surface);
}
</style>
