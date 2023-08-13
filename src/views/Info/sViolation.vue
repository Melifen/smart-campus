<template>
    <div class="violation-body">
        <el-row class="violation-search" justify="center">
            <el-input class="violation-search-input" v-model="value" type="text" maxlength=8 crearable
                placeholder="请输入所需查询学号" />
            <el-button class="violation-search-button" type="primary" @click="getRecord">查询</el-button>
        </el-row>

        <span v-show="vltn_show">暂未查询到违纪记录</span>
        <ul v-show="!vltn_show" class="violation-ul" v-infinite-scroll="load" style="overflow:auto;">
            <vCard v-for="(item, index) in vArray" :key="index" :delete="onDelete" :sviolation="item" />
        </ul>   
    </div>
</template>
<script setup>
import vCard from "@/components/sViolation/vCard.vue"
import { getStudentRecord_punish } from "@/request/api//student"
import { ElMessage } from "element-plus";
import { ref } from "vue"
import 'element-plus/dist/index.css'

const value = ref('')
const vltn_show = ref(true)
const vArray = ref([])

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
        let stuinfo = {
            stuId: value.value,
            type: "违纪处分"
        }
        await getStudentRecord_punish(JSON.stringify(stuinfo)).then(res => {
            console.log(res.data)
            vArray.value = res.data
        })
        vArray.value.length == 0 ? vltn_show.value = true : vltn_show.value = false
    }
}
const onDelete = (rpid) => {
    vArray.value = vArray.value.filter(item => item.rpid !== rpid);
}
</script>
<style lang="less" scoped>
.violation-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .violation-search {
        width: 80%;

        .violation-search-input {
            width: 20%;
        }

        .violation-search-button {
            margin-left: 10px;
        }
    }

    .violation-ul {
        width: 100%;
        height: 100%;
    }

    span {
        margin-top: 5%;
    }

}
</style>