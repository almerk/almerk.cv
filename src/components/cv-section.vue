<template>
  <article>
    <h4 v-if="section.label">
      {{ section.label }}
    </h4>
    <p v-if="typeof section.values == 'string'">
      {{ section.values }}
    </p>
  </article>
</template>

<script>
export default {
  created() {
    console.log(this.section.label, typeof this.section.values);
  },
  props: {
    section: Object,
  },
  data() {
    return {};
  }
};
</script>

<style>
p {
  color: black;
  font-size: 14pt;
  font-family: "Times New Roman", Times, serif;
  text-indent: 1.25em;
  line-height: 1.4em;
}
</style>