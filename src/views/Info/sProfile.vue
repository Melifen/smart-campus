<template>
    <div class="profile-body">
        <el-input class="profile-input" v-model="value" placeholder="请输入学生姓名或学号查询" :suffix-icon="Search" @change="updateArray"/>
        <ul class="profile-ul" v-infinite-scroll="load" style="overflow: auto">
            <sCard v-for="(item, index) in sArray" :key="index" :sinfo="item" :delete="onDelete"/>
        </ul>
    </div>
</template>
<script setup>
import sCard from "@/components/sProfile/sCard.vue"
import { getAllStudentProfile } from "@/request/api//student.js"
import { Search } from '@element-plus/icons-vue'
import { ref } from "vue"

const value = ref('')
const sArray = ref([])

const load = () => {
    getAllStudentProfile().then(res => {
        console.log(res.data)
        sArray.value = res.data
    })
}
const onDelete = (sno) => {
    sArray.value = sArray.value.filter(item => item.sno !== sno);
}
const updateArray = () =>{
    getAllStudentProfile().then(res => {
        if( value.value ==''){
            sArray.value = res.data
        }else{
            sArray.value = res.data.filter(item => item.sname.includes(value.value) || item.sno == value.value);
        }
        
    })
        
}
</script>
<style lang="less">
.profile-body {
    width: 100%;
    height: 100%;
    .profile-input{
        width: 20%;
    }
    .profile-ul {
        width: 100%;
        height: 100%;
    }
}
</style>