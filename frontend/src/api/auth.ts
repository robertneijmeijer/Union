import axios from "axios";


// TODO -> Extend from ApiBase class so that every function in this class can call
// TODO ApiBase.request({options}) so that f.e. headers can be set in the api base class
// TODO -> can also be used to set the base URL

export default class RegisterApi {
    public static register = (username: string, email: string, password: string) => {
        return Promise.resolve(
            axios.post(
                "http://localhost:8000/users/register",
                {user: {username, email, password}})
                .then((res) => {
                    console.log(res)
                    return res;
                }).catch(error => {
                    console.log("error")
                    console.log(error)
                    return error // -> ? TODO Test handling
                })
        )
    }
}
