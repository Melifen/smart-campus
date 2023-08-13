import service from "..";

//登录信息获取
export const getTeacherInfo = (param) => {
    return service({
        url: '/api/teacher/v1/tno/'+param,
        method: 'get'
    })
}

