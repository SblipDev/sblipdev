<template>
  <div class="books-page">
    <div class="container">
      <h3 style="color:#ffcf33;font-style:bold;">Books I have read.</h3><br>
      <div class="row">
        <div v-for="book in books" :key="book.id">
          <div class="col">
            <h4 style="color:#8400ff;font-style:bold;">{{ book.title }}</h4>
            <p>By {{ book.author }} | {{ book.stars_in_emoji }}</p>
            <img
              :src="book.book_image_url"
              alt=""
              height="300"
              width="250"
            /><br /><br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiService } from "@/common/api.service.js";

export default {
  name: "Books",
  data() {
    return {
      books: {},
    };
  },
  methods: {
    getBooks() {
      let endpoint = "/api/books/";
      apiService(endpoint).then((data) => {
        if (data) {
          this.books = data;
        }
      });
    },
  },
  created() {
    this.getBooks();
  },
};
</script>

<style>
.books-page {
  min-height: 100vh;
  padding-top: 100px;
}
</style>