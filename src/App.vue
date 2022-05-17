<template>
  <div id="app">
    <nav>
      <a @click="generatePdf">{{ pdfLabel }}</a>
      <fieldset>
        <label>Lang:</label>
        &nbsp;
        <router-link to="/en" title="In english">🇬🇧</router-link>
        &nbsp;
        <router-link to="/ru" title="На русском">🇷🇺</router-link>
      </fieldset>
      
    </nav>
    <vue-html2pdf
      :float-layout="false"
      :enable-download="true"
      :preview-modal="false"
      filename="Aleksey_Merkuliev"
      :pdf-quality="2"
      :manual-pagination="true"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width=""
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <router-view></router-view>
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
export default {
  name: "App",
  components: {
    VueHtml2pdf,
  },
  created() {
    this.$i18n.locale = this.locale;
  },
  data() {
    return {};
  },
  methods: {
    generatePdf() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  computed: {
    pdfLabel() {
      return this.$t("pdf.label");
    },
    locale() {
      return this.$route.params.locale || "en";
    },
  },
  watch: {
    locale(newValue) {
      this.$i18n.locale = newValue;
    },
    $route() {
      this.$i18n.locale = this.$route.params.locale;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  --accent-color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--accent-color);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
#app > .vue-html2pdf {
  flex-shrink: 0;
  flex-grow: 1;
}
#app .layout-container {
  display: flex;
  flex-direction: column;
  align-content: center;
}
#app a {
  color: inherit;
  text-decoration: none;
}
#app a:hover {
  text-decoration: underline;
}
#app > nav {
  background: var(--accent-color);
  color: white;
  position: sticky;
  font-size: 1.1em;
  top: 0;
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  padding: 0 .5em;
}
#app > nav [type="radio"] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  gap: 1em;
}
#app label,
#app a {
  cursor: pointer;
}
#app > nav fieldset {
  border: none;
}
</style>
