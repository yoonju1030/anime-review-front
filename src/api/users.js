import common from "../utils/common";

async function checkDuplicatedId(params) {
    const value = await common.axiosCall("POST", "/users/check_id", params);
    return value.result
}

async function signUpUser(params) {
    const value = await common.axiosCall("POST", "/users/signup", params);
    console.log(value.message)
    return value.result
} 

export {
    checkDuplicatedId,
    signUpUser
}