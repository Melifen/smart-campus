<template>
    <div class="mcard-body">
        <img src="assets/icon/teacher.svg" alt="teacher" />
        <span>{{ minfo.tname }}</span>
        <span>{{ minfo.cname }}</span>
        <span>{{ minfo.mname }}</span>
        <span>{{ minfo.tphone }}</span>
        <el-row>
            <el-button type="primary">修改信息</el-button>
            <el-button type="danger" @click="onDelete">删除信息</el-button>
        </el-row>
    </div>
</template>
<script setup>
import { defineProps,onMounted} from 'vue'

const props = defineProps({
    minfo: {
        type: Object,
        default: {}
    },
    delete: {
        type: Function,
        default: () => { }
    }
})

const onDelete = () => {
    props.delete(props.minfo.tno)
}
</script>
<style lang="less" scoped>
.mcard-body {
    width: 95%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ebeff5;
    margin-top: 10px;
    padding: 20px;

    img {
        width: 50px;
        height: 50px;
    }
}
</style>