import axios from 'axios';

const axiosService = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const axiosCall = async (method, url, params = {}, errorFunc=false) => {
    let axios = axiosService;
    let option = { withCredentials: true };
    let returnValue = {}
    switch (method) {
        case "GET":
            await axios
            .get(url,option)
            .then((res) => {
                returnValue = res.data
            })
            .catch((err) => {
                if (errorFunc) {
                    errorFunc(err)
                } else {
                    return err
                }
            })
            break;

        case "POST": 
            await axios
            .post(url,params,option)
            .then((res) => {
                returnValue = res.data
            })
            .catch((err) => {
                if (errorFunc) {
                    errorFunc(err)
                } else {
                    return err
                }
            })
    }
    return returnValue
}

const commonObj = {
    axiosCall
}

export default commonObj;