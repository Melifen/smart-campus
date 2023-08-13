<template>
    <div class="pcard-body">
        <img src="assets/icon/student.svg" alt="apply" />
        <span>{{ psinfo.sname }}</span>
        <span>{{ psinfo.sdept}}</span>
        <span>{{ psinfo.sclass }}</span>
        <div class="aistc-year">
            <span class="title">资助学年</span>
            <span >{{ psinfo.acadyear }}</span>
        </div>
        <div class="aistc-year">
            <span class="title">资助状态</span>
            <span>{{ psinfo.aduitState}}</span>
        </div>
        <el-row>
            <el-button type="primary" :disabled="disabled">审核</el-button>
            <el-button type="danger" @click="onDelete">删除申请</el-button>
        </el-row>
    </div>
</template>
<script setup>
import { defineProps,computed} from 'vue' 

const disabled = computed(() => {
    return props.psinfo.aduitState == '待审核'? false : true
})
const props = defineProps({
    psinfo: {
        type: Object,
        default: {}
    },
    delete: {
        type: Function,
        default: () => { }
    }
})

const onDelete = () => {
    props.delete(props.psinfo.id)
}
</script>
<style lang="less" scoped>
.pcard-body {
    width: 95%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ebeff5;
    margin-top: 10px;
    padding: 20px;
    
    .aistc-year{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-evenly;
        .title{
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