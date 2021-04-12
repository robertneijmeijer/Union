import ApiBase from "@/api/api-base";

export default class UserApi extends ApiBase {

    public static getUsers = () => {
        ApiBase.requestGetAll("users")
            .then(response => {
                console.log(response)
                return response
            })
            .catch(error => {
                console.log(error)
                return error
            })
    }
}
