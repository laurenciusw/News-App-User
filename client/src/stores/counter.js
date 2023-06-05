import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'https://wlhck.site',
    articles: [],
    bookmark: [],
    totalPage: '',
    filter: '',
    page: 1,
    categorySearch: '',
    detail: []
  }),

  actions: {
    async loginHandler(value) {
      console.log(value)
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/login',
          method: 'post',
          data: value
        })
        localStorage.access_token = data.access_token
        localStorage.email = data.email
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },

    //register
    async registerHanlder(value) {
      console.log('masuk router')
      try {
        await axios({
          url: this.baseUrl + '/pub/register',
          method: 'post',
          data: value
        })
        this.router.push('/login')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },

    //fetch data
    async fetchHandler() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/articles',
          method: 'get',
          params: {
            page: this.page,
            filter: this.filter,
            categorySearch: this.categorySearch
          }
        })
        this.articles = data.data
        this.totalPage = data.totalPage
        console.log(this.totalPage, 'asdsad')
      } catch (error) {
        console.log(error)
      }
    },

    //bookmark
    async fetchBookmark() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/bookmark',
          method: 'get',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.bookmark = data
      } catch (error) {
        console.log(error)
      }
    },

    //add bookmark
    async addBookmark(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/bookmark/' + id,
          method: 'post',
          headers: {
            access_token: localStorage.access_token
          }
        })
        await this.fetchBookmark()
      } catch (error) {
        console.log(error)
      }
    },

    //detail
    async fetchDetail(value) {
      try {
        console.log(value, 'dari counter')
        const { data } = await axios({
          url: this.baseUrl + '/pub/articles/' + value,
          method: 'get'
        })
        console.log(data)
        this.detail = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },

    // googlelogin
    async googlelogin(res) {
      console.log('masuk router')
      try {
        const google_token = res.credential
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/pub/googleLogin',
          headers: { google_token }
        })
        console.log(data)
        localStorage.access_token = data.access_token
        localStorage.email = data.userEmail
        this.router.push('/')
        this.currentPage = 'home'
      } catch (error) {}
    }
  }
})
