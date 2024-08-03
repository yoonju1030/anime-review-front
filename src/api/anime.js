import common from "../utils/common";

async function getAnimes() {
    const value = await common.axiosCall("GET", "/anime/get_anime");
    return value.message
}

async function postAnime(params) {
    const value = await common.axiosCall("POST", "/anime/get_info", params);
    return value.message
}

export {getAnimes, postAnime}