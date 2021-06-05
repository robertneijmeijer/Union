import i18n from "../i18n/i18n";

export interface ValidatorResponse {
  isValid: boolean;
  errorMessage: string;
}
const MINIMUM_LENGTH: number = 6;

export function isValidLength(string: string): ValidatorResponse {
  const response: ValidatorResponse = { isValid: true, errorMessage: "" };
  if (string.length < MINIMUM_LENGTH) {
    response.isValid = false;
  }
  return response;
}

export function isValidEmail(email: string): ValidatorResponse {
  const response: ValidatorResponse = { isValid: true, errorMessage: "" };
  // regex from: https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
  const regex: RegExp = RegExp(
    "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:)*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:+)\\])"
  );
  if (!isValidLength(email).isValid) {
    response.isValid = false;
    response.errorMessage =
      "Email " +
      i18n.global
        .t("register.errors.minimum_characters")
        .replace("%s", MINIMUM_LENGTH.toString());
  }
  if (!regex.test(email)) {
    response.isValid = false;
    response.errorMessage = i18n.global.t("register.errors.email_not_valid");
  }
  return response;
}

export function isValidUsername(username: string): ValidatorResponse {
  const response: ValidatorResponse = { isValid: true, errorMessage: "" };
  const regex: String = "";

  if (!isValidLength(username).isValid) {
    response.isValid = false;
    response.errorMessage =
      i18n.global.t("register.errors.username") +
      " " +
      i18n.global
        .t("register.errors.minimum_characters")
        .replace("%s", MINIMUM_LENGTH.toString());
  }

  //Can add more username checks here

  return response;
}

export function isValidPassword(password: string): ValidatorResponse {
  const response: ValidatorResponse = {
    isValid: true,
    errorMessage: i18n.global.t("register.errors.password_not_valid"),
  };
  // Minimum eight characters, at least one letter, one number and one special character:
  const regex: RegExp = RegExp(
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  );
  if (!regex.test(password)) {
    response.isValid = false;
  }
  return response;
}

export function isValidPostTitle(title: string): ValidatorResponse {
  const response: ValidatorResponse = { isValid: true, errorMessage: "" };

  if(!title || title.length <= 0){
    response.isValid = false
    response.errorMessage = i18n.global.t("create_post.errors.title")
  }
  return response;
}

export function isValidPostDescription(description: string): ValidatorResponse {
  const response: ValidatorResponse = { isValid: true, errorMessage: "" };

  if(!description || description.length <= 0){
    response.isValid = false
    response.errorMessage = i18n.global.t("create_post.errors.description")
  }
  return response;
}
