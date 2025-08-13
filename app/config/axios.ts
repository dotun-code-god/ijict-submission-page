import axios from "axios";

const axiosFetch = axios.create({
    baseURL:  "https://ijict-submission-page.vercel.app/"
    // baseURL:  "http://localhost:2000"
})

export default axiosFetch;