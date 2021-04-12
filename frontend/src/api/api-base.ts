import axios, {AxiosResponse} from "axios";

export default class ApiBase {
    private static BASE_URL = "http://localhost:8000" // TODO: Replace with env var

    protected static executeRequest(
        method: "get" | "delete" | "post" | "put",
        url: string,
    ): Promise<AxiosResponse> {
        // TODO Retrieve token
        const sampleToken = 'b\'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwiZXhwIjoxNjIzNDA3MDQ0fQ.CWsq5ireKWE5lFAlorLmAFGtP0pf17nIrE_5b2VU2v4\''
        return axios
            .request({
                method,
                url,
                headers: { Authorization: `Bearer ${sampleToken}`}
            })
            .then(response => response)
            .catch(handleError)
    }

    public static async requestGet(resource: string, id: String) {
        return this.executeRequest("get", `${ApiBase.BASE_URL}/${resource}/${id}/`)
    }

    public static requestGetAll(resource: string) {
        return this.executeRequest("get", `${ApiBase.BASE_URL}/${resource}/`)
    }
}


const handleError = (error: any) => {
    if(error.data) {
        return error.data
    }

    return error;
}
