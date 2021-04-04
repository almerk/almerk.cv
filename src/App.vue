<template>
  <div id="app">
    <nav>
      <fieldset>
        <label><input type="radio" name="lang" />🇬🇧</label>
        <label><input type="radio" name="lang" />🇷🇺</label>
      </fieldset>
      <a @click="generatePdf">pdf</a>
    </nav>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="false"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      filename="Aleksey_Merkuliev"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="landscape"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf">
      <section slot="pdf-content">
        <data-component :info="info"></data-component>
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import dataComponent from "./components/data.vue";
export default {
  name: "App",
  components: {
    VueHtml2pdf,
    dataComponent,
  },
  data() {
    return {
      info: {
        career: "Fullstack software developer",
        downloadLink: { label: "Download in PDF", href: "" },
        qualification: { label: "Qualification", value: "Middle" },
        name: "Aleksey Merkuliev",
        age: "26 years",
        place: "Moscow, Russia",
        sex: "Male",
        contacts: {
          phone: { label: "☎️+7(903)730-34-45", href: "tel:+79037303445" },
          mail: {
            label: "📧almerk.work@gmail.com",
            href: "mailto:almerk.work@gmail.com",
          },
          tlg: { label: "@Almerk_tlg", href: "tg://resolve?domain=Almerk_tlg" },
          skype: {
            label: "Skype",
            href: "https://join.skype.com/invite/lqjQveWJBf5Q",
          },
          github: { label: "Github", href: "https://github.com/almerk" },
        },
      },
    };
  },
  methods: {
    generatePdf() {
      this.$refs.html2Pdf.generatePdf();
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
#app {
  --accent-color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--accent-color);
  overflow-y: auto;
}
#app .layout-container{
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
  top: 0;
  display: flex;
  flex-direction: row;
}
#app > nav fieldset {
  border: none;
}
</style>
