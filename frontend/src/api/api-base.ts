import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export default class ApiBase {
    private static BASE_URL = "http://localhost:8000" // TODO: Replace with env var

    protected static executeRequest(
        method: "get" | "delete" | "post" | "put",
        url: string,
        config: AxiosRequestConfig
    ): Promise<AxiosResponse> {
        // TODO Retrieve token
        const sampleToken = 'b\'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwiZXhwIjoxNjIzNDA3MDQ0fQ.CWsq5ireKWE5lFAlorLmAFGtP0pf17nIrE_5b2VU2v4\''
        const headers = {
            Authorization: `Bearer ${sampleToken}`
        }

        return axios
            .request({
                method,
                url,
                headers,
                ...config,
            })
            .then(response => response)
            .catch(handleError)

        // TODO: Test if auth headers is overridden if config variable is applied in functions below
    }

    public static async requestGet(resource: string, id: string, config?: AxiosRequestConfig) {
        return this.executeRequest(
            "get", `${ApiBase.BASE_URL}/${resource}/${id}/`, {...config}
        )
    }

    public static async requestGetAll(resource: string, config?: AxiosRequestConfig) {
        return this.executeRequest(
            "get", `${ApiBase.BASE_URL}/${resource}/`, {...config}
        )
    }

    public static async requestPost(resource: string, config?: AxiosRequestConfig) {
        return this.executeRequest(
            "post", `${ApiBase.BASE_URL}/${resource}`, {...config}
        )
    }
}


const handleError = (error: any) => {
    if (error.data) {
        return error.data
    }

    return error;
}
