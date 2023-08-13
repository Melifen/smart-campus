import service from "..";

export const getPendingApply = async (sno) => {
    const rsp = await service({
        url: '/api/transfer/v1/pending'+sno,
    })
    return rsp.data
}

export const getSbTransferApply = async (sno) => {
    const rsp = await service({
        url: '/api/transfer/v1/sno/'+sno,
    })
    return rsp.data
}