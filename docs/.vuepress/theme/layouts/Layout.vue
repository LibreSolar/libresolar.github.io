<template>
  <Layout />
  <div class="footer">
    <span style="padding: 5px;"><a href="https://twitter.com/LibreSolar"><img src="/images/twitter-logo.svg" height="14" /> Twitter</a></span>
    <span style="padding: 5px;"><a href="https://github.com/LibreSolar"><img src="/images/github-logo.svg" height="14" /> GitHub</a></span>
    | <span style="padding: 5px;">Content provided by The Libre Solar Project under <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">CC-BY-SA 4.0 License</a></span>
    | <span style="padding: 5px;"><a href="https://libre.solar/about/contact.html">Contact / Impressum</a></span>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default defineComponent({
  components: {
    Layout,
  },
})
</script>

<style>
.footer {
  border-top: 1px var(--c-border) solid;
  padding: 1rem;
  text-align: center;
  background-color: var(--c-bg-light);
  height: auto;
  flex-grow: 1;
}
</style>
