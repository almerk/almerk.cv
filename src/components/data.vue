<template>
  <div id="data">
    <header>
      <main>
        <h1>{{ info.career }}</h1>
        <h2>{{ info.name }}</h2>
        <span class="qualification"
          >{{ info.qualification.label }}:&nbsp;<strong>{{
            info.qualification.value
          }}</strong></span
        >
      </main>
      <figure>
        <img id="profile" role="img" src="../assets/Me.jpg" :alt="info.name" />
        <figcaption>
          <ul>
            <li>{{ info.sex }}, {{ info.age }}</li>
            <li>{{ info.place }}</li>
          </ul>
        </figcaption>
      </figure>
      <address>
        <ul>
          <li v-for="(contact, i) in info.contacts" :key="i">
            <a :href="contact.href">{{ contact.label }}</a>
          </li>
        </ul>
      </address>
    </header>
    <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic fugit nostrum fugiat quaerat? Tenetur consequatur dicta vitae est rem nostrum consequuntur modi tempore. Rerum reprehenderit voluptate aliquam cumque necessitatibus.
        </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>
#data > header {
  box-shadow: 0px 2px 2px var(--accent-color), -1px 2px 2px var(--accent-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em;
  flex-wrap: wrap;
}
#data > header > * {
  margin: 0.3em;
}
#data > header main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#data > header > figure {
  display: flex;
  flex-direction: row;
}
#data > header > figure ul {
  list-style: none;
}
#data > header > figure ul li {
  white-space: nowrap;
}
#profile {
  max-height: 12vmin;
  min-height: 100%;
  width: auto;
  border-radius: 50%;
}
#data address ul {
  list-style: none;
}
#data address ul li {
  font-style: normal;
}
#data .qualification {
  text-transform: uppercase;
  font-size: 0.95em;
}
</style>