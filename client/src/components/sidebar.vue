<template>
  <div>
    <div>
      <nav
        class="sticky top-0 z-1 border-4 bg-white shadow-md rounded-3xl p-2 pt-6 pb-8 sm:max-w-xs lg:w-80"
      >
        <div class="px-4 pb-6">
          <div class="flex text-lg justify-center">
            <h3 class="mt-1 mb-2 text-lg font-medium">Category fillter</h3>
            <a
              @click="$router.replace({ query: { page } })"
              class="ml-12 border shadow-md rounded-2xl p-1 bg-gray-500 hover:bg-gray-900 cursor-pointer font-sans antialiased font-light text-white transition ease-in"
              >Clear filter</a
            >
          </div>
          <ul class="mb-8 text-sm font-medium">
            <li v-for="category in categories" :key="category.id">
              <a
                @click="$router.push({ path: '/', query: { page, search, fillter: category.id } })"
                class="flex items-center rounded py-3 pl-3 pr-4 cursor-pointer"
              >
                <span class="select-none">{{ category.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- example copies end -->
      </nav>
    </div>
    <div class="mx-auto lg:ml-80"></div>
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style></style>
