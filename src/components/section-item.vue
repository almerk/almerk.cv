<template>
  <p v-if="valueIsString" v-html="value" class="string-li"></p>
  <ul v-else-if="valueIsArray">
    <li v-for="(item, i) in value" :key="i" class="array-li">
      <section-item :value="item" />
    </li>
  </ul>
  <div v-else-if="valueIsObject">
    <div v-for="(v, k) in value" :key="k" class="object-li">
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
.object-li {
  display: flex;
  align-items: baseline;
}
.object-li > * {
  display: block;
  list-style-type: none;
  margin: 0 .3rem 0 0;
}
.array-li  {
  list-style-type: initial;
}
</style>