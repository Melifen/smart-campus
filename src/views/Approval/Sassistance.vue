<template>
    <div class="assistance-body">
        <el-row class="assistance-search" justify="center">
            <el-input class="assistance-search-input" v-model="value" type="text" maxlength=8 crearable
                placeholder="请输入所需查询学号" />
            <el-button class="assistance-search-button" type="primary" @click="getRecord">查询</el-button>
            <el-button class="assistance-pending-button" type="warning" @click="getPending">待审核</el-button>
        </el-row>
        <span v-show="pltn_show">暂未查询到申请记录</span>
        <ul v-show="!pltn_show" class="assistance-ul" v-infinite-scroll="load" style="overflow:auto;">
            <pCard v-for="(item, index) in pArray" :key="index" :delete="onDelete" :psinfo="item" />
        </ul>
    </div>
</template>
<script setup>
import { ref,onMounted} from 'vue'
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import { getAllAssistanceApply,getSbAsitcApply} from '@/request/api/poor'
import pCard from '@/components/poorStu/pCard.vue'

const pArray = ref([]);
const value = ref('')
const pltn_show = ref(true)
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
        await getSbAsitcApply(value.value).then(res => {
            console.log(res.data)
            pArray.value = res.data
        })
        pArray.value.length == 0 ? pltn_show.value = true : pltn_show.value = false
    }
}
const getPending = () =>{
    pArray.value = pArray.value.filter(item => item.aduitState == "待审核");
}
const onDelete = (id) => {
    pArray.value = pArray.value.filter(item => item.id !== id);
}
onMounted(()=>{
    getAllAssistanceApply().then(res=>{
        console.log(res)
        pArray.value = res.data
        pltn_show.value=false;
    })
    
})
</script>
<style lang="less" scoped>
.assistance-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    .assistance-search {
        width: 80%;

        .assistance-search-input {
            width: 20%;
        }

        .assistance-search-button {
            margin-left: 10px;
        }

        .assistance-pending-button {
            position: absolute;
            left: 90%;
        }
    }
    .assistance-ul {
        width: 100%;
        height: 100%;
    }
    span{
        margin-top: 5%;
    }
}
</style>