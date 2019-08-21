<template>
  <div class="film-list">
    <ul class="film-list_ul">
      <li
        class="film-list_li"
        v-for="(x, item) in films"
        :key="item.platform_category_id"
      >
        <a href="#">
          <img :src="x.img" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'filmList',
  props: {
    films: Array
  }
}
</script>

<style lang="scss">
.film-list {
  height: 180px;
  overflow: hidden;
  .film-list_ul {
    margin: 10px 0;
  }
  .film-list_li {
    float: left;
    margin: 3px 5px;
  }
  .film-list_li img {
    height: 80px;
  }
}
</style>
