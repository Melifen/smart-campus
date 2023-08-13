<template>
    <div class="stcard-body">
        <img src="assets/icon/apply.svg" alt="apply" />
        <span>{{ stinfo.sname }}</span>
        <div class="span-container">
            <span class="title">班级</span>
            <span>{{ stinfo.clsname }}</span>
        </div>
        <div class="span-container">
            <span class="title">联系方式</span>
            <span>{{ stinfo.sphone }}</span>
        </div>
       
        <div class="span-container">
            <span class="title">调动请求</span>
            <span>{{ stinfo.sttype }}</span>
        </div>

        <div class="span-container">
            <span class="title">审批状态</span>
            <span>{{ stinfo.state }}</span>
        </div>
        <el-row>
            <el-button type="primary" :disabled="disabled">审核</el-button>
            <el-button type="danger" @click="onDelete">删除申请</el-button>
        </el-row>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'

const disabled = computed(() => {
    return props.stinfo.state == '待审核' ? false : true
})
const props = defineProps({
    stinfo: {
        type: Object,
        default: {}
    },
    delete: {
        type: Function,
        default: () => { }
    }
})

const onDelete = () => {
    props.delete(props.stinfo.stid)
}
</script>
<style lang="less" scoped>
.stcard-body {
    width: 95%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ebeff5;
    margin-top: 10px;
    padding: 20px;

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
}
</style>