<template>
  <article>
    <h3 v-if="section.label">
      {{ section.label }}
    </h3>
    <section-item :value="section.values" />
  </article>
</template>

<script>
import sectionItem from "./section-item.vue";
export default {
  components: {
    sectionItem,
  },
  name: "cv-section",
  props: {
    section: Object,
  },
  data() {
    return {};
  },
  computed: {
    valuesIsArray() {
      return Array.isArray(this.section.values);
    },
  },
};
</script>

<style>
h3 {
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: 800;
}
h4 {
  font-size: 1em;
  font-weight: 200;
}
p {
  color: black;
  font-size: 12pt;
  font-family: "Times New Roman", Times, serif;
  line-height: 1.4em;
}
article {
  padding: 0.2em;
}
article ul {
  padding-left: 1em;
}
article > p,article>div>p {
  text-indent: 1.25em;
}
</style>