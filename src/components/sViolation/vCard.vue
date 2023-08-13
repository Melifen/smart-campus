<template>
    <div class="vcard-body">
        <img src="assets/icon/warn.svg" alt="type" />
        <span class="vcard-title">{{ sviolation.rptype }}</span>
        <span class="vcard-content">{{ sviolation.rpname }}</span>
        <span class="vcard-time">{{ sviolation.rptime }}</span>
        <el-row>
            <el-button type="primary">修改记录</el-button>
            <el-button type="danger" @click="onDelete">删除记录</el-button>
        </el-row>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    sviolation: {
        type: Object,
        default: {}
    },
    delete: {
        type: Function,
        default: () => { }
    }
})

const onDelete = () => {
    props.delete(props.sviolation.rpid)
}
</script>
<style lang="less">
.vcard-body {
    width: 95%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ebeff5;
    margin-top: 10px;
    padding: 20px;

    img{
        width: 50px;
        height: 50px;
    }

    .vcard-title {}

    .vcard-content {
        width: 50%;
        color:#333333;
    }

    .vcard-time {}
}
</style>