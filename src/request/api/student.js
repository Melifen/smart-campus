import service from '../index'

export const getStudentInfo = async (params) => {
    const rsp = await service({
        url:`/api/student/v1/sno/${JSON.parse(params).sno}`,
        method:'get',
        headers:{
            'Content-Type':'application/json;charset=UTF-8'
        }
    })
    return rsp.data
}

//获取学生违纪信息
export const getStudentRecord_punish = async (params) => {
    const rsp = await service({
        url:`/api/rewardpublish/v1/sno/type/${JSON.parse(params).stuId}/${JSON.parse(params).type}`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    return rsp.data
}
//获取所有学生信息
export const getAllStudentProfile = async (params) => {
    const rsp = await service({
        url:`/api/student/v1/all`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    return rsp.data
}
//根据学号获取个人信息
export function getUser(sno) {
    return service({
        method: 'get',
        url: `/api/student/v1/sno/${sno}`
    })
}


