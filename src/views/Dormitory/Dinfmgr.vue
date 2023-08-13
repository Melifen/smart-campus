<template>
    <div class="dinfmgr-body">
        <el-input class="dinfmgr-input" v-model="value" placeholder="请输入学生姓名" :suffix-icon="Search" @change="updateArray" />

        <ul class="dinfmgr-ul" v-infinite-scroll="load" style="overflow: auto">
            <dCard v-for="(item, index) in dArray" :key="index" :dinfo="item" :delete="onDelete" />
        </ul>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { deleteDormInfo, getAllDormInfo, getSbDorm } from '@/request/api/dorm'
import dCard from '@/components/Dinfmgr/dCard.vue'
import { Search } from '@element-plus/icons-vue'

const dArray = ref([])
const value = ref('')
const load = () => {
    // console.log('load')
}
const onDelete = (sno) => {
    dArray.value = dArray.value.filter((item) => item.sno !== sno)
}
const updateArray = () => {
    getAllDormInfo().then((res) => {
        if (value.value == '') {
            dArray.value = res.data
        } else {
            dArray.value = res.data.filter(item => item.sname.includes(value.value) || item.sno == value.value);
        }
    })
}
onMounted(() => {
    getAllDormInfo().then((res) => {
        console.log(res.data)
        dArray.value = res.data
    })
})
</script>
<style lang="less">
.dinfmgr-body {
    width: 100%;
    height: 100%;

    .dinfmgr-input {
        width: 20%;
    }

    .dinfmgr-ul {
        width: 100%;
        height: 100%;
    }
}
</style>