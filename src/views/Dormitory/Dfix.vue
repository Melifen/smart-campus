<template>
    <div class="fix-body">
        <el-row class="fix-search" justify="center">
            <el-input class="fix-search-input" v-model="value" type="text" maxlength=8 crearable
                placeholder="请输入所需查询学生姓名" />
            <el-button class="fix-search-button" type="primary" @click="getRecord">查询</el-button>
        </el-row>
        <span v-show="fltn_show"> 暂未查询到保修申请</span>
        <ul v-show="!fltn_show" class="fix-ul" v-infinite-scroll="load" style="overflow: auto">
            <fCard v-for="(item, index) in fArray" :key="index" :finfo="item" :delete="onDelete" />
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { getSbFixApply } from '@/request/api/dorm'
import fCard from '@/components/Dfix/fCard.vue'

const value = ref('');
const fArray = ref([]);
const fltn_show = ref(true);

const load = () => {
    // console.log('load')
}
const getRecord = async () => {
    if (value.value == '') {
        ElMessage({
            message: "请输入学生姓名",
            type: "warning"
        })
    } else {
        await getSbFixApply(value.value).then((res) => {
            console.log(res.data)
            fArray.value = res.data
        })
        fArray.value.length == 0 ? fltn_show.value = true : fltn_show.value = false
    }
}
const onDelete = (raid) => {
    fArray.value = fArray.value.filter(item => item.raid !== raid);
}
</script>
<style lang="less" scoped>
.fix-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .fix-search {
        width: 80%;

        .fix-search-input {
            width: 20%;
        }

        .fix-search-button {
            margin-left: 10px;
        }
    }

    .fix-ul {
        width: 100%;
        height: 100%;
    }

    span {
        margin-top: 5%;
    }
}
</style>