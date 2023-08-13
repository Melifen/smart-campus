<template>
    <div class="building">
        <el-form ref="form" class="login-container" :model="formModel" :inline="true" :rules="rules">
            <h3 class="login-title">用户登录</h3>
            <div>
                <el-form-item class="login-username" label="用户名" prop="username">
                    <el-input v-model="formModel.username" placeholder="输入账号" />
                </el-form-item>
                <el-form-item label="密&ensp;&ensp;码" class="login" prop="password">
                    <el-input type="password" v-model="formModel.password" placeholder="输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button class="button" type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template> 
<script>
import { reactive } from 'vue'
import { getTeacherInfo } from '@/request/api/teacher'
import 'element-plus/dist/index.css'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const formModel = reactive({
            username: "",
            password: "",
        })
        const rules = reactive({
            username: [{ required: true, trigger: "blur", message: "请输入用户名" }],
            password: [{ required: true, trigger: "blur", message: "请输入密码" }],
        })
        const onSubmit = async () => {
            const res = await getTeacherInfo(formModel.username)
            if (res.status == 200) {
                if (res.data.data.tphone !== formModel.password) {
                    ElMessage({
                        message: "密码错误",
                        type: "error",
                        center:true
                    })
                } else {
                    ElMessage({
                        message: "登录成功",
                        type: "success",
                        center:true
                    })
                    localStorage.setItem("myinfo", res.data.data)
                    store.commit("setTeacherInfo", res.data.data)
                    store.commit("updataStatus")
                    router.push('/home')
                }   
            } else {
                ElMessage({
                    message: "用户名不存在",
                    type: "error",
                    center:true
                })
            }
        }
        return ({
            formModel,
            rules,
            onSubmit
        })
    }
}


</script>
<style lang="less">
.building {
    background: url("assets/background.jpg");
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
    display: flex;

    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: center;
        justify-self: center;
        width: 500px;
        height: 270px;
        // border: 1px solid #eaeaea;
        margin: 0 auto;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;

        .login-title {
            margin-top: 40px;
            margin-bottom: 30px;
            color: #505458;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .login-username {
                display: flex;
                flex-direction: row;
                margin: 0 auto;
            }

            .login {
                display: flex;
                flex-direction: row;
                margin: 0 auto;
                margin-top: 20px;
            }

            .button {
                display: inline-block;
                border-radius: 4px;
                border: none;
                color: #ffffff;
                text-align: center;
                font-size: 15px;
                padding: 10px;
                width: 80px;
                transition: all 0.5s;
                cursor: pointer;
                margin: 20px;
                margin-left: 55px;

                span {
                    cursor: pointer;
                    display: inline-block;
                    position: relative;
                    transition: 0.5s;
                }

                span:after {
                    content: "»";
                    position: absolute;
                    opacity: 0;
                    top: 0;
                    right: -20px;
                    transition: 0.5s;
                }
            }

            .button:hover span {
                padding-right: 15px;
            }

            .button:hover span:after {
                opacity: 1;
                right: 0;
            }
        }
    }

}
</style>