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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic fugit
      nostrum fugiat quaerat? Tenetur consequatur dicta vitae est rem nostrum
      consequuntur modi tempore. Rerum reprehenderit voluptate aliquam cumque
      necessitatibus.
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>