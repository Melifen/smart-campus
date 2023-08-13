<template>
    <el-menu mode="vertical" class="aside-menu" >
        <el-col justify="center">
            <el-col class="mark-menu">
                <img src="assets/icon/blue-school-mark.png" alt="mark" />
                <span>智慧校园后台管理系统</span>
            </el-col>
            <el-sub-menu v-for="(item, index) in menuList" :key="index" :index="item.index" @click="clickMenu(item)">
                <template #title>
                    <span>{{ item.label }}</span>

                </template>
                <el-menu-item v-for="(subItem, subIndex) in item.subMenu" :key="subIndex" :index="subItem.index" @click="clickSubmenu(subItem)">
                    {{ subItem.label }}
                </el-menu-item>
            </el-sub-menu>
        </el-col>

        <!-- <el-sub-menu index="1">
          <template #title>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <span>Navigator Two</span>
          </template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
        </el-sub-menu> -->
    </el-menu>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore();
const router =useRouter();
const menuList = [
    {
        label: '信息维护',
        index: "0",
        subMenu: [
            {
                index: "0-0",
                label: '学生档案维护',
                path: '/studentInfo'
            },
            {
                index: "0-1",
                label: '学生违纪维护',
                path: '/studentViolation'
            },
            {
                index: "0-2",
                label: '管理员信息维护',
                path: '/adminInfo'
            }
        ]
    },
    {
        label: '学生申请审批',
        index: "1",
        subMenu: [
            {
                index: "1-0",
                label: '学籍调动审批',
                path: '/stutransfer'
            },
            {
                index: '1-1',
                label: '贫困资助申请审批',
                path: '/sassistance'
            }
        ]
    },
    {
        label: '学生宿舍管理',
        index: "2",
        subMenu: [
            {
                index: '2-0',
                label: '住宿信息管理',
                path: '/dormitoryinfo'
            },
            {
                index: '2-1',
                label: '宿舍待修申请',
                path: '/dormitoryfix'
            },
        ]
    },
]
const clickMenu = (item) =>{
    const { path, label,subMenu} = item
    const newTab = {
        path,
        label,
        subMenu
    }
    store.commit('updateBreadcrumb', newTab)
}
const clickSubmenu = (item) =>{
    const { path, label } = item
    const newTab = {
        path,
        label
    }
    store.commit('addBreadcrumb', newTab)
    router.push(path)
}
</script>
<style lang="less">
:root:root {
    --el-menu-bg-color: #F5F9FF;
    --el-color-primary: #007BFF;
    --el-color-text:#cccccc;
}

.aside-menu {
    width: 100%;
    height: 100%;
    .mark-menu{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #286cb0;
        margin-bottom: 10px;
        img{
            height: 40px;
            width: 200px;
        }
    }
}
</style>