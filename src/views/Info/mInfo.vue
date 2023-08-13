<template>
    <div class="minfo-body">
        <el-row class="minfo-search" justify="center">
            <el-input class="minfo-search-input" v-model="value" type="text" maxlength=6 crearable
                placeholder="请输入所需查询教师编号" />
            <el-button class="minfo-search-button" type="primary" @click="getRecord">查询</el-button>
        </el-row>
        <span v-show="mltn_show">暂未查询到教师信息</span>
        <ul v-show="!mltn_show" class="minfo-ul" style="overflow:auto;">
            <mCard v-for="(item, index) in mArray" :key="index" :delete="onDelete" :minfo="item" />
        </ul>
    </div>
</template>
<script setup>
import { ref } from "vue"
import mCard from '@/components/mInfo/mCard.vue'
import { ElMessage } from "element-plus";
import 'element-plus/dist/index.css'
import { getTeacherInfo } from '@/request/api/teacher'

const value = ref('')
const mltn_show = ref(true)
const mArray = ref([])

const getRecord = async () => {
    if (value.value == '') {
        ElMessage({
            message: "请输入教师编号",
            type: "warning"
        })
    } else {
        await getTeacherInfo(value.value).then((res) => {
            console.log(res.data.data)
            mArray.value.push(res.data.data)
        })
        mArray.value.length == 0 ? mltn_show.value = true : mltn_show.value = false
    }
}
const onDelete = (tno) =>{
    mArray.value = mArray.value.filter(item => item.tno !== tno);
}
</script>
<style lang="less" scoped>
.minfo-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .minfo-search {
        width: 80%;

        .minfo-search-input {
            width: 20%;
        }

        .minfo-search-button {
            margin-left: 10px;
        }
    }

    .minfo-ul {
        width: 100%;
        height: 100%;
    }

    span {
        margin-top: 5%;
    }
}
</style>