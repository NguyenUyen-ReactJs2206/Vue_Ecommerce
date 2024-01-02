<template>
  <div>
    <AuthNavBar title="Đăng Ký" />

    <div class="authForm">
      <div class="container">
        <form action="" @submit.prevent="onSubmit">
          <div class="authForm__main">
            <div class="authForm__content">
              <h1>Đăng Ký</h1>
              <div class="input-wrap" :class="{ 'input-wrap--flex-column': emailError.status || emailSuccess.status }">
                <input type="text" placeholder="Email" v-model="formRegister.email" />
                <p class="error-text" v-if="emailError.status">*{{ emailError.messageError }}</p>
                <p class="success-text" v-else-if="emailSuccess.status">
                  {{ emailSuccess.messageSuccess }}
                </p>
              </div>
              <div
                class="input-wrap"
                :class="{ 'input-wrap--flex-column': passwordError.status || passwordSuccess.status }"
              >
                <input type="password" placeholder="Password" v-model="formRegister.password" />
                <p class="error-text" v-if="passwordError.status">*{{ passwordError.messageError }}</p>
                <p class="success-text" v-else-if="passwordSuccess.status">
                  {{ passwordSuccess.messageSuccess }}
                </p>
              </div>
              <div
                class="input-wrap"
                :class="{ 'input-wrap--flex-column': confirmPasswordError.status || confirmPasswordSuccess.status }"
              >
                <input type="password" placeholder="Confirm Password" v-model="formRegister.confirmPassword" />
                <p class="error-text" v-if="confirmPasswordError.status">*{{ confirmPasswordError.messageError }}</p>
                <p class="success-text" v-else-if="confirmPasswordSuccess.status">
                  {{ confirmPasswordSuccess.messageSuccess }}
                </p>
              </div>
              <button>Đăng Ký</button>
              <div class="span-group">
                <span>Bạn chưa có tài khoản? </span>
                <span>
                  <router-link :to="{ name: 'login' }" exact>Đăng nhập</router-link>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthNavBar from 'src/components/NavBar/AuthNavBar.vue';
import { Ref, ref } from 'vue';

const formRegister = ref({
  email: '',
  password: '',
  confirmPassword: ''
});

const emailError = ref({ messageError: '', status: false });
const passwordError = ref({ messageError: '', status: false });
const confirmPasswordError = ref({ messageError: '', status: false });

const emailSuccess = ref({ messageSuccess: '', status: false });
const passwordSuccess = ref({ messageSuccess: '', status: false });
const confirmPasswordSuccess = ref({ messageSuccess: '', status: false });

const onSubmit = () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[A-Z]).{6,15}$/;

  const validateField = (
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

  const isEmailValid = validateField(
    'email',
    formRegister.value.email,
    emailRegex,
    emailError,
    emailSuccess,
    'Invalid email format'
  );

  const isPasswordValid = validateField(
    'password',
    formRegister.value.password,
    passwordRegex,
    passwordError,
    passwordSuccess,
    'Please enter the correct password with at least 1 capital letter, minimum 6 characters, maximum 15 characters'
  );

  const isPasswordMatched = formRegister.value.password === formRegister.value.confirmPassword;

  if (!isPasswordMatched) {
    confirmPasswordError.value = {
      messageError: 'Password and Confirm Password do not match',
      status: true
    };
    confirmPasswordSuccess.value = {
      messageSuccess: '',
      status: false
    };
  } else {
    confirmPasswordSuccess.value = {
      messageSuccess: '',
      status: true
    };
    confirmPasswordError.value = {
      messageError: '',
      status: false
    };
  }

  if (isEmailValid && isPasswordValid && isPasswordMatched) {
    console.log(formRegister.value);
  }
};
</script>

<style scoped>
.input-wrap--flex-column {
  flex-direction: column;
  gap: 2px;
}

.error-text {
  color: var(--error);
  margin: 0;
}

.success-text {
  color: var(--success);
  margin: 0;
}
</style>
