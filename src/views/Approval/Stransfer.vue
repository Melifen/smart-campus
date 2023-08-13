<template>
    <div class="transfer-body">
        <el-row class="transfer-search" justify="center">
            <el-input class="transfer-search-input" v-model="value" type="text" maxlength=8 crearable
                placeholder="请输入所需查询学号" />
            <el-button class="transfer-search-button" type="primary" @click="getRecord">查询</el-button>
        </el-row>
        <span v-show="sltn_show">暂未查询到学籍调动信息</span>
        <ul v-show="!sltn_show" class="transfer-ul" v-infinite-scroll="load" style="overflow:auto;">
            <stCard v-for="(item, index) in sArray" :key="index" :delete="onDelete" :stinfo="item" />
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import { getSbTransferApply } from '@/request/api/transfer'
import stCard from '@/components/stCard/stCard.vue'

const value = ref('')
const sltn_show = ref(true)
const sArray = ref([])

const load = () => {
    // getStudentRecord_punish().then(res => {
    //     console.log(res.data)
    //     items.value = res.data
    // })
}
const getRecord = async () => {
    if (value.value == '') {
        ElMessage.warning('请先输入学号')
    } else {
        await getSbTransferApply(value.value).then(res => {
            console.log(res.data)
            sArray.value = res.data
        })
        sArray.value.length == 0 ? sltn_show.value = true : sltn_show.value = false
    }
}
const onDelete = (stid) => {
    sArray.value = sArray.value.filter(item => item.stid !== stid);
}


</script>
<style lang="less" scoped>
.transfer-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .transfer-search {
        width: 80%;

        .transfer-search-input {
            width: 20%;
        }

        .transfer-search-button {
            margin-left: 10px;
        }
    }

    .transfer-ul {
        width: 100%;
        height: 100%;
    }

    span {
        margin-top: 5%;
    }
}
</style>