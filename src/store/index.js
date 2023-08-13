import {createStore} from 'vuex'

const store = createStore({
    namespaced: true,

    state: {
        status: '已登录',
        teacherInfo: {},
        tabsList:[{
            path:'/home',
            label:'首页',
        }],
    },
    mutations:{
        setTeacherInfo(state,teacherInfo){
            state.teacherInfo = teacherInfo;
        },
        updateBreadcrumb(state,route){
            if(state.tabsList.length<2){
                state.tabsList.splice(0, 1, route)
            }else{
               state.tabsList[0].label == route.label
               &&
                state.tabsList[0].subMenu.some(item=>{
                    if(item.label == state.tabsList[1].label)
                    return true
                }) 
                ?
                state.tabsList.splice(0, 1, route)
                :
                state.tabsList.splice(0, 2, route)              
            }
        },
        addBreadcrumb(state,route){
            if(state.tabsList.length<2){
                state.tabsList.push(route)
            }else{
                state.tabsList.splice(1, 1, route)
            }
        },
        updataStatus(state){
            state.status = '已登录'
        }
    },

})
export default store