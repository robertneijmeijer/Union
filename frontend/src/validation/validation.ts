import i18n from "../i18n/i18n";

interface validatorResponse {
    isValid: boolean,
    message: String
};
const MINIMUM_LENGTH: number = 6;

function isValidLength(string: String): validatorResponse {
    const response: validatorResponse = {isValid: false, message: ""};
    if (string.length > MINIMUM_LENGTH) {
        response.isValid = true;
    }
    return response;
}

function isValidEmail(email: String): validatorResponse {
    const response: validatorResponse = {isValid: false, message: i18n.global.t("register.errors.email_not_valid")};
    // regex from: https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
    const regex: String = `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`;
    
    return response;
}

function isValidUsername(username: String): validatorResponse {
    const response: validatorResponse = {isValid: false, message: ""};
    const regex: String = "";

    return response;
}

function isValidPassword(password: String): validatorResponse {
    const response: validatorResponse = {isValid: false, message: ""};
    const regex: String = "";

    return response;
}

export default {isValidEmail, isValidUsername, isValidPassword}