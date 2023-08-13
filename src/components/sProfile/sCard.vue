<template>
    <div class="card-body">
        <img :src="imgUrl" alt="ssexImg" />
        <span>{{ sinfo.sname }}</span>
        <span>{{ sinfo.grade }}</span>
        <span>{{ sinfo.cname }}</span>
        <span>{{ sinfo.mname }}</span>
        <el-row>
            <el-button type="primary">修改</el-button>
            <el-button type="danger" @click="onDelete">删除</el-button>
        </el-row>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    sinfo: {
        type: Object,
        default: {}
    },
    delete:{
        type:Function,
        default:()=>{}
    }
})
const imgUrl = computed(() => {
    if (props.sinfo.ssex == '男') {
        return 'assets/icon/man.svg';
    } else {
        return 'assets/icon/woman.svg';
    }
});
const onDelete = () => {
    props.delete(props.sinfo.sno)
}
</script>
<style lang="less">
.card-body {
    width: 95%;
    height: 120px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ebeff5;
    margin-top: 10px;

    img {
        width: 50px;
        height: 50px;
    }

    span {
        color: #333333;
    }
}
</style>