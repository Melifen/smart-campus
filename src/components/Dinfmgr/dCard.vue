<template>
    <div class="card-body">
        <img src="assets/icon/dominitory.svg" alt="dominitory" />
        <span>{{ dinfo.sname }}</span>
        <div class="span-container">
            <span class="title">宿舍</span>
            <span>{{ dinfo.dorm }}</span>
        </div>
        <div class="span-container">
            <span class="title">性别</span>
            <span>{{ dinfo.ssex }}</span>
        </div>
        
        <div class="span-container">
            <span class="title">联系方式</span>
            <span>{{ dinfo.sphone }}</span>
        </div>
        <el-row>
            <el-button type="danger" @click="onDelete">删除</el-button>
        </el-row>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    dinfo: {
        type: Object,
        default: {}
    },
    delete: {
        type: Function,
        default: () => { }
    }
})
const onDelete = () => {
    props.delete(props.dinfo.sno)
}
</script>
<style lang="less">
.card-body {
    width: 95%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ebeff5;
    margin-top: 10px;

    .span-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .title {
            color: #5c5c5c;
            font-size: 14px;
        }
    }

    img {
        width: 50px;
        height: 50px;
    }

    span {
        color: #333333;
    }
}
</style>