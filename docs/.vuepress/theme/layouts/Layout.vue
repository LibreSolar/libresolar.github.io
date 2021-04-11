<template>
  <Layout>
    <template #page-bottom>
      <div class="footer">
        Content provided by The Libre Solar Project under <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">CC-BY-SA 4.0 License</a> | <a href="https://libre.solar/about/contact.html">Contact / Impressum</a>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@vuepress/theme-default/lib/layouts/Layout.vue'

export default defineComponent({
  components: {
    Layout,
  },
})
</script>

<style>
.footer {
  border-top: 1px #ccc solid;
  padding: 1rem 1rem 0 1rem;
  text-align: center;
}
</style>
