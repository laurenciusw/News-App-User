<template>
  <div class="max-w-sm min-w-[350px] bg-white shadow-md rounded-3xl col-span-1 p-2 mx-1 my-3">
    <div
      class="overflow-x-hidden rounded-2xl cursor-pointer"
      @click="$router.push(`detail/${articles.id}`)"
    >
      <img class="h-40 rounded-2xl w-full object-cover" :src="articles.imgUrl" />
    </div>
    <div class="mt-4 pl-2 mb-2 flex justify-between">
      <div class="cursor-pointer" @click="$router.push(`detail/${articles.id}`)">
        <p class="text-lg font-semibold text-gray-900 mb-3">
          {{ articles.title }}
        </p>
        <p class="text-md text-gray-800 mt-0">
          {{ articles.content }}
        </p>
      </div>
      <div
        v-if="!whislist"
        class="flex flex-col-reverse border rounded-full h-full shadow-2xl p-1 mb-auto bg-gray-200 mb-1 mr-4 group"
      >
        <svg
          @click="bookmark(articles.id)"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 group-hover:opacity-70"
          :fill="hover"
          viewBox="0 0 24 24"
          stroke="gray"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  props: ['articles'],
  methods: {
    ...mapActions(useCounterStore, ['addBookmark']),
    bookmark(id) {
      if (localStorage.access_token) {
        this.addBookmark(id)
      } else {
        this.$router.push(`login`)
      }
    }
  }
}
</script>

<style></style>
