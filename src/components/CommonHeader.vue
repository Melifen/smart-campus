<template>
  <div class="header-container">
    <div class="l-content">
      <el-button v-on:click="handleMenu" class="collapse-button">
        <el-icon color="#00C1FF">
          <Menu />
        </el-icon>
      </el-button>

      <!-- 面包屑 -->
        
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
        v-for="item in { ...store.state.tabsList }"
        :key="item.path"
        :to="{ path: item.path }"
        >
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon color="#5c5c5c" size="25px">
            <User />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="personal">个人中心</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { Menu,User} from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted } from 'vue'
const handleMenu = () => {
  store.commit("collapseMenu");

};
const store = useStore();
const router = useRouter();
const logout = () => {
  //跳转回登录页面
  router.push({ path: "login" });
};
const personal = () => {
  router.push({ name: "personal" });
};
</script>
<style lang="less" scoped>
.header-container {
  padding: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;    
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }

  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      // border: 1px solid #000000;
    }
  }

  .l-content {
    display: flex;
    align-items: center;
    width: 25%;
    justify-content: flex-start;

    .collapse-button{
      margin-right: 20px;
      background-color: #00639a;
      cursor: pointer;
    }
    .collapse-button:hover{
      background-color: #2c91c7;
    }
    // :deep().el-breadcrumb__item {
    //   .el-breadcrumb__inner {
    //     font-weight: bold;
    //     margin-left: 10px;
    //     font-size: 16px;

    //     &.is-link {
    //       color: rgb(58, 58, 58);
    //     }
    //   }
    // }
  }
}
</style>