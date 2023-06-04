<template>
  <div class="mx-auto justify-center content-center">
    <div class="flex">
      <div class="w-full mr-5">
        <div class="grid grid-cols-3">
          <!-- card -->
          <card
            class="max-w-sm min-w-[450px] bg-white shadow-md rounded-3xl col-span-1 p-2 mx-1 my-3 cursor-pointer"
            v-for="article in articles"
            :key="article.id"
            :articles="article"
          />
        </div>
      </div>
    </div>
    <!-- component -->
    <!-- This is an example component -->
    <div class="max-w-2xl -mr-72 mt-3 mb-10 mx-auto content-end">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px">
          <li class="cursor-pointer">
            <a
              @click="
                page > 1
                  ? $router.push({
                      path: '/',
                      query: { page: +page - 1, filter, categorySearch }
                    })
                  : $router.push({ path: '/', query: { page: 1, filter, categorySearch } })
              "
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>
          <li v-for="(n, i) in totalPage" :key="i">
            <a
              @click="$router.push({ path: '/', query: { page: n, filter, categorySearch } })"
              :class="
                page == n
                  ? 'bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white cursor-pointer'
                  : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer'
              "
              >{{ n }}</a
            >
          </li>
          <li>
            <a
              @click.prevent="
                page < totalPage
                  ? $router.push({
                      path: '/',
                      query: { page: +page + 1, filter, categorySearch }
                    })
                  : $router.push({ path: '/', query: { page: page, filter, categorySearch } })
              "
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import card from '../components/card.vue'
import sidebar from '../components/sidebar.vue'
import { useCounterStore } from '../stores/counter'

export default {
  components: {
    card
  },
  created() {
    this.page = 1
    this.filter = this.$route.query.filter
    this.fetchHandler()
    this.fetchBookmark()
  },
  computed: {
    ...mapWritableState(useCounterStore, [
      'articles',
      'page',
      'filter',
      'categorySearch',
      'totalPage',
      'bookmark'
    ])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchHandler', 'fetchBookmark'])
  },
  watch: {
    '$route.query'() {
      this.page = this.$route.query.page
      this.filter = this.$route.query.filter
      this.categorySearch = this.$route.query.categorySearch
      this.fetchHandler()
    }
  }
}
</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}
/* GTA Text */
main .title {
  text-shadow: 0 0 0.125em rgb(192 38 211 / 0.5), 0 0 0.45em currentColor;
}
/* Vice City Text */
main .cursive {
  font-family: 'Satisfy', cursive;
  text-shadow: 0 0 0.125em rgb(192 38 211 / 0.5), 0 0 0.45em currentColor;
}
</style>
