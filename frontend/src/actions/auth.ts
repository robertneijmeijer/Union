export enum actionTypes {
    LOGIN_ACTION = "LOGIN_ACTION"
}

export const authActions = {
    [actionTypes.LOGIN_ACTION]() {
        console.log("login action fired")
        // TODO Call the login api endpoint
        // TODO Perform commit (mutation) call
    }
}
