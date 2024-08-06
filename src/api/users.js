import common from "../utils/common";

async function checkDuplicatedId(params) {
    const value = await common.axiosCall("POST", "/users/check_id", params);
    return value.result
}

export {checkDuplicatedId}