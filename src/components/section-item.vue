<template>
  <p v-if="valueIsString" v-html="value"></p>
  <ul v-else-if="valueIsArray">
    <li v-for="(item, i) in value" :key="i">
      <section-item :value="item" />
    </li>
  </ul>
  <div v-else-if="valueIsObject">
    <div v-for="(v, k) in value" :key="k">
      <h4>{{ k }}</h4>
      <section-item :value="v"></section-item>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  name: "section-item",
  data() {
    return {};
  },
  computed: {
    valueIsString() {
      return typeof this.value == "string";
    },
    valueIsArray() {
      return Array.isArray(this.value);
    },
    valueIsObject() {
      return typeof this.value == "object";
    },
  },
};
</script>

<style>
</style>