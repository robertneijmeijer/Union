import ApiBase from "@/api/api-base";

// TODO -> Extend from ApiBase class so that every function in this class can call
// TODO ApiBase.request({options}) so that f.e. headers can be set in the api base class
// TODO -> can also be used to set the base URL

export default class RegisterApi extends ApiBase {

    public static register = async (username: string, email: string, password: string): Promise<any> => {
        return RegisterApi.requestPost(
            'users/register',
            {data: {user: {username, email, password}}})
            .then((res) => { return res })
            .catch(error => { throw error })

    }
}
