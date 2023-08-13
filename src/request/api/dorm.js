import service from '../index'

export const getSbDorm = async (sno) => {
    const rsp = await service({
        url: '/api/dorm/v1/'+sno,
        method: 'get'
    })
    return rsp.data
}
export const getAllDormInfo = async () => {
    const rsp = await service({
        url: '/api/dorm/v1/',
        method: 'get'
    })
    return rsp.data
}
export const deleteDormInfo = async(sno) =>{
    const rsp = await service({
        url: '/api/dorm/v1/'+sno,
        method: 'delete'
    })
    return rsp.code
}
export const getSbFixApply = async (sname) => {
    const rsp = await service({
        url: '/api/repairApply/v1/'+sname,
        method: 'get'
    })
    return rsp.data
}