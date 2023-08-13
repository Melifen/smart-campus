<template>
    <div class="card-body">
        <img src="assets/icon/dominitory.svg" alt="dominitory" />
        <span>{{ finfo.sname }}</span>
        <div class="span-container">
            <span class="title">宿舍</span>
            <span>{{ finfo.dorm +'-'+ finfo.detail}}</span>
        </div>
        <div class="span-container">
            <span class="title">报修内容</span>
            <span>{{ finfo.ratype+':'+finfo.content }}</span>
        </div>
        
        <div class="span-container">
            <span class="title">维修状态</span>
            <span>{{ finfo.state }}</span>
        </div>
        <el-row>
            <el-button type="danger" @click="onDelete">删除</el-button>
        </el-row>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    finfo: {
        type: Object,
        default: {}
    },
    delete: {
        type: Function,
        default: () => { }
    }
})
const onDelete = () => {
    props.delete(props.finfo.raid)
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