<template>
  <div class="mx-auto justify-center content-center">
    <div
      class="max-w-sm min-w-[1200px] h-[780px] mx-auto justify-center border-3 content-center grid grid-cols-2 mt-8 bg-white shadow-2xl rounded-3xl col-span-1 p-4"
    >
      <img class="rounded-lg mr-3" :src="detail.imgUrl" alt="" />
      <div class="ml-8">
        <div class="grid grid-cols-2">
          <div>
            <h1 class="text-2xl font-bold">{{ detail.title }}</h1>
            <!-- <p class="font-medium text-gray-700">{{ detail.Category.name }}</p> -->
          </div>
          <div v-html="detail.qr" class="ml-14 mt-4" style="height: 170px; width: 170px"></div>
        </div>
        <div>
          <h1 class="text-2xl font-bold mt-3">Description</h1>
          <p class="font-medium text-gray-700 mt-3 mr-2 text-justify">{{ detail.content }}</p>
        </div>

        <div class="justify-center">
          <button
            @click="addBookmark($route.params.id)"
            class="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg mr-4 w-72 mt-3 justify-center"
            @mouseover="hover = 'red'"
            @mouseleave="hover = 'white'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block mr-2 group-hover:opacity-70"
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
            Tambahkan ke Favorit
          </button>
          <router-link
            :to="'/'"
            class="flex items-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transform transition duration-300 ease-in-out w-72 mt-3 justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block mr-2 -mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Kembali ke Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  data() {
    return {
      hover: 'white'
    }
  },
  computed: {
    ...mapState(useCounterStore, ['detail'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchDetail', 'addBookmark']),
    bookmark(id) {
      if (localStorage.access_token) {
        this.addBookmark(id)
      } else {
        this.$router.push(`login`)
      }
    }
  },
  created() {
    this.fetchDetail(this.$route.params.id)
  }
}
</script>

<style></style>
