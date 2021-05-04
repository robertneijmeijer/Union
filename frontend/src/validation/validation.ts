import i18n from "../i18n/i18n";

interface validatorResponse {
    isValid: boolean,
    message: string
};
const MINIMUM_LENGTH: number = 6;

function isValidLength(string: string): validatorResponse {
    const response: validatorResponse = {isValid: false, message: ""};
    if (string.length >= MINIMUM_LENGTH) {
        response.isValid = true;
    }
    return response;
}

function isValidEmail(email: string): validatorResponse {
    const response: validatorResponse = {isValid: true, message: ""};
    // regex from: https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
    const regex: RegExp = RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');
    if (!isValidLength(email).isValid) {
        response.isValid = false;
        response.message = "Email " + i18n.global.t("register.errors.minimum_characters").replace("%s", MINIMUM_LENGTH.toString());
    }
    if (!regex.test(email)) {
        response.isValid = false;
        response.message = i18n.global.t("register.errors.email_not_valid");
    }
    return response;
}

function isValidUsername(username: string): validatorResponse {
    const response: validatorResponse = {isValid: false, message: ""};
    const regex: String = "";

    if (!isValidLength(username).isValid) {
        response.isValid = false;
        response.message = i18n.global.t("register.errors.username") + " " +
            i18n.global.t("register.errors.minimum_characters").replace("%s", MINIMUM_LENGTH.toString());
    }

    return response;
}

function isValidPassword(password: string): validatorResponse {
    const response: validatorResponse = {isValid: false, message: i18n.global.t("register.errors.password_not_valid")};
    // Minimum eight characters, at least one letter, one number and one special character:
    const regex: RegExp = RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
    if (regex.test(password)) {
        response.isValid = true;
        response.message = "";
    }
    return response;
}

export default {isValidEmail, isValidUsername, isValidPassword}