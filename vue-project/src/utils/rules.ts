import { Ref } from 'vue';

export const validateField = (
  fieldName: string,
  value: string,
  regex: RegExp,
  error: Ref<{
    messageError: string;
    status: boolean;
  }>,
  success: Ref<{
    messageSuccess: string;
    status: boolean;
  }>,
  errorMessage: string
) => {
  if (value === '') {
    error.value = { messageError: `Please enter ${fieldName}`, status: true };
    success.value = { messageSuccess: '', status: false };
    return false;
  } else if (!regex.test(value)) {
    error.value = { messageError: `${errorMessage}`, status: true };
    success.value = { messageSuccess: '', status: false };
    return false;
  } else {
    success.value = { messageSuccess: '', status: true };
    error.value = { messageError: '', status: false };
    return true;
  }
};
