<template>
  <div id="cv">
    <header>
      <main>
        <h1>{{ $t("career") }}</h1>
        <h2>{{ $t("name") }}</h2>
        <span class="qualification"
          >{{ $t("qualification.label") }}:&nbsp;<strong>{{
            $t("qualification.value")
          }}</strong></span
        >
      </main>
      <figure>
        <img id="profile" role="img" src="../assets/Me.jpg" :alt="$t('name')" />
        <figcaption>
          <ul>
            <li>{{ $t("sex") }}, {{ $t("age") }}</li>
            <li>{{ $t("place") }}</li>
          </ul>
        </figcaption>
      </figure>
      <address>
        <ul>
          <li v-for="(contact, i) in $t('contacts')" :key="i">
            <a :href="contact.href">{{ contact.label }}</a>
          </li>
        </ul>
      </address>
    </header>
    <main>
      <cv-section
        v-for="(section, i) in mainSections"
        :key="i"
        :section="section"
      ></cv-section>
    </main>
    <footer>
      <cv-section :section="about"></cv-section>
    </footer>
  </div>
</template>

<script>
import cvSection from "./cv-section.vue";
export default {
  components: {
    cvSection,
  },
  data() {
    return {};
  },
  methods: {
    getSection(name, classes) {
      return { ...this.$t(name), classes: [...(classes || []), name] };
    },
  },
  computed: {
    mainSections() {
      return [
        this.getSection("desiredJob"),
        this.getSection("professionalSkills"),
        this.getSection("experience", ["html2pdf__page-break"]),
        this.getSection("education"),
        this.getSection("knownLanguages"),
        this.getSection("personalSkills"),
      ];
    },
    about() {
      return this.$t("aboutMe");
    },
  },
  watch: {
    $route() {
      this.$i18n.locale = this.$route.params.locale;
    },
  },
};
</script>

<style>
#cv > header {
  box-shadow: 0px 2px 2px var(--accent-color), -1px 2px 2px var(--accent-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em;
  flex-wrap: wrap;
}
#cv > header > * {
  margin: 0.3em;
}
#cv > header main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#cv > header > figure {
  display: flex;
  flex-direction: row;
  padding-right: 5em;
}
#cv > header > figure ul {
  list-style: none;
  width: auto;
}
#cv > header > figure ul li {
  white-space: nowrap;
}

#profile {
  max-height: 12vmin;
  min-height: 100%;
  width: auto;
  border-radius: 50%;
}
#cv address ul {
  list-style: none;
}
#cv address ul li {
  font-style: normal;
}
#cv .qualification {
  text-transform: uppercase;
  font-size: 0.95em;
}
#cv > main,
#cv > footer {
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>