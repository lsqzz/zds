<template>
  <div class="page-home">
    <router-view />
    <Tabbar :tabs="tabs" v-show="isShowTab" />
  </div>
</template>

<script>
import Tabbar from '../../components/Tabbar/index.vue'

export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: '商城',
          icon: 'icon-zuanjie',
          href: '/shangcheng'
        },
        {
          id: 2,
          name: '发现',
          icon: 'icon-faxian',
          href: '/pingpai'
        },
        {
          id: 3,
          name: '定制',
          icon: 'icon-zuanshi',
          href: '/zhiding'
        },
        {
          id: 4,
          name: '购物车',
          icon: 'icon-bao',
          href: '/cars'
        },
        {
          id: 5,
          name: '个人中心',
          icon: 'icon-gerenzhongxin',
          href: '/me'
        }
      ]
    }
  },
  computed: {
    isShowTab() {
      let flag = true
      if (this.$route.path === '/cars') {
        flag = false
      }

      return flag
    }
  }
}
</script>

<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
