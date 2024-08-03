import common from "../utils/common";

async function getAnimes() {
    const value = await common.axiosCall("GET", "/get_anime");
    return value.message
}

async function postAnime(params) {
    const value = await common.axiosCall("POST", "/get_info", params);
    return value.message
}

export {getAnimes, postAnime}