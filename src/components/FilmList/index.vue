<template>
  <div class="film-list">
    <ul class="film-list_ul">
      <li class="film-list_li">
        <div class="xiao">
          <a href="#">
            <img
              src="http://www.chowtaiseng.com/ishop/web/theme/web5/image/sc_shipin1.jpg"
              alt=""
            />
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'filmList'
}
</script>

<style lang="scss">
.film-list {
  .film-list_li .xiao img {
    width: 100px;
  }

  .film-list_li .da img {
    width: 160px;
    height: 80px;
  }
}
</style>
