<script setup>
import { RouterView } from 'vue-router'
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import { computed} from 'vue';
import { useStore} from 'vuex';

const store = useStore();

const hasLogined = computed(() => {
  console.log(store.state.status)
  store.state.status == '已登录' ? true : false;
})

</script>
<template>
  <!-- <RouterView v-show="!hasLogined"/> -->
  <div class="common-layout" >
    <el-container class="container-layout">
      <el-aside width="200px" class="aside-layout">
        <CommonAside />
      </el-aside>
      <el-container class="right-layout">
        <el-header class="header-layout" height="60px">
          <CommonHeader />
        </el-header>
        <el-main class="main-layout">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.common-layout {
  height: 100vh;
  width: 100vw;

  .container-layout {
    height: 100%;
    width: 100%;

    .aside-layout {
      height: 100%;
    }
    .right-layout {

      height: 100%;
      width: 100%;
      
      .header-layout {
        background-color: #F5F9FF;
        border-bottom-style: solid;
        border-bottom-color: #cccccc;
        border-bottom-width: 1px;
      }
      
      .main-layout{
        background-color: #f5f9ff;
      }
    }
  }
}
</style>
