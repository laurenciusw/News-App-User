<template>
  <!-- follow me on twitter @asad_codes -->
  <div class="sticky top-0 z-20 flex flex-wrap place-items-center">
    <section class="mx-auto">
      <!-- navbar -->
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-3 xl:px-12 py-3 flex w-full items-center">
          <div class="flex w-full items-center">
            <div class="flex items-center cursor-pointer">
              <a class="text-3xl font-bold font-heading">
                <!-- <img class="h-9" src="logo.png" alt="logo"> -->
              </a>
              <router-link :to="'/'" class="font-bold font-heading">Broken News</router-link>
            </div>
          </div>
          <!-- Nav Links -->
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"></ul>
          <!-- Header Icons -->

          <div class="hidden xl:flex items-center space-x-5 items-center">
            <div class="relative mx-auto text-gray-600">
              <form
                v-if="$route.name === 'home'"
                @submit.prevent="
                  $router.push({ path: '/', query: { filter, page, categorySearch } })
                "
              >
                <input
                  v-model="filter"
                  class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="filter"
                  name="filter"
                  placeholder="filter"
                />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                  <svg
                    class="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style="enable-background: new 0 0 56.966 56.966"
                    xml:space="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <a
              v-if="login"
              class="hover:text-gray-200 cursor-pointer"
              @click="$router.push('/bookmark')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
            <!-- Sign In / Register      -->
            <a
              class="flex items-center hover:text-gray-200 cursor-pointer"
              @click="profile = !profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          class="fixed right-3 mt-20 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-gray-900 shadow-md"
          x-show="profileOpen"
          :class="{ hidden: !profile }"
          x-transition
        >
          <div class="flex items-center space-x-2 p-2">
            <img
              src="https://api.dicebear.com/6.x/big-smile/svg?seed=admin"
              alt="avatar"
              class="h-9 w-9 rounded-full"
            />
            <div class="font-medium cursor-default">
              {{ login ? email.split('@')[0] : 'haiii' }}
            </div>
          </div>

          <div class="p-2" v-if="login">
            <button
              class="flex items-center space-x-2 transition hover:text-blue-600"
              @click="handleLogout"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <div>Log Out</div>
            </button>
          </div>
          <div class="p-2" v-if="!login">
            <button
              class="flex items-center space-x-2 transition hover:text-blue-600"
              @click="$router.push('/login')"
            >
              <i class="fa-solid fa-right-to-bracket"></i>
              <div>Log In</div>
            </button>
          </div>
        </div>
        <!-- Responsive navbar -->
        <a class="xl:hidden flex mr-6 items-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span class="flex absolute -mt-5 ml-4">
            <span
              class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"> </span>
          </span>
        </a>
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
    </section>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'navbar',
  data() {
    return {
      profile: false,
      filter: '',
      currentPage: this.$route.page,
      login: false,
      email: localStorage.email
    }
  },
  computed: {
    ...mapWritableState(useCounterStore, ['filter', 'page'])
  },
  methods: {
    handleLogout() {
      this.login = false
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created() {
    if (localStorage.access_token) {
      this.login = true
    }
  }
}
</script>

<style>
#nav {
  z-index: 9999;
}
</style>
