<template>
  <div id="app">
    <nav>
      <fieldset>
        <label><input type="radio" name="lang" />🇬🇧</label>
        <label><input type="radio" name="lang" />🇷🇺</label>
      </fieldset>
      <a :href="downloadLink.href">{{ downloadLink.label }}</a>
    </nav>
    <header>
      <main>
        <h1>{{ career }}</h1>
        <h2>{{ name }}</h2>
        <span class="qualification"
          >{{ qualification.label }}:&nbsp;<strong>{{
            qualification.value
          }}</strong></span
        >
      </main>
      <figure>
        <img id="profile" role="img" src="./assets/Me.jpg" :alt="name" />
        <figcaption>
          <ul>
            <li>{{ sex }}, {{ age }}</li>
            <li>{{ place }}</li>
          </ul>
        </figcaption>
      </figure>
      <address>
        <ul>
          <li v-for="(contact, i) in contacts" :key="i">
            <a :href="contact.href">{{ contact.label }}</a>
          </li>
        </ul>
      </address>
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
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
    };
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
#app a {
  color:inherit;
  text-decoration:none;
}
#app a:hover{
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
#app > header > * {
  margin: 0.3em;
}
#app > header {
  box-shadow: 0 2px 2px var(--accent-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em;
  flex-wrap: wrap;
}
#app > header main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#app > header > figure {
  display: flex;
  flex-direction: row;
}
#app > header > figure ul {
  list-style: none;
}
#app > header > figure ul li {
  white-space: nowrap;
}
#profile {
  max-height: 12vmin;
  min-height: 100%;
  width: auto;
  border-radius: 50%;
}
#app address ul {
  list-style: none;
}
#app address ul li {
  font-style: normal;
}
#app .qualification {
  text-transform: uppercase;
  font-size: 0.95em;
}
</style>
