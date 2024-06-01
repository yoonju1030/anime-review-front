import common from "../utils/common";

async function getAnimes() {
    const value = await common.axiosCall("GET", "/anime/get_anime");
    return value.message
}

async function requestPost(params) {
    const value = await common.axiosCall("POST", "/api/v1/endpoint", params);
    return value
}

export {getAnimes, requestPost}