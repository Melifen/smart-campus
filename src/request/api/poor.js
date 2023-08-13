import service from "..";

//获取所有平困学生
export const getAllPoorStudent = async () => {
    const rsp = await service({
        url: '/api/poorStudents/v1',
        method: 'get'
    })
    return rsp.data
}

//获取所有的资助申请
export const getAllAssistanceApply = async() =>{
    const rsp = await service({
        url:"/api/poorStudentApply/v1",
        method:'get'
    })
    return rsp.data
}

//获取某人的资助申请
export const getSbAsitcApply = async(sno) =>{
    const rsp = await service({
        url:'/api/poorStudentApply/v1/'+sno,
        method:'get'
    })
    return rsp.data
}
