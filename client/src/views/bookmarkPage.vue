<template>
  <div class="grid grid-cols-4">
    <card v-for="data in bookmark" :key="data.id" :articles="data.Article" />
  </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import card from '../components/card.vue'
import { useCounterStore } from '../stores/counter'
export default {
  components: { card },
  data() {
    return {}
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchBookmark'])
  },
  computed: {
    ...mapWritableState(useCounterStore, ['bookmark'])
  },
  created() {
    this.fetchBookmark()
  }
}
</script>

<style></style>
