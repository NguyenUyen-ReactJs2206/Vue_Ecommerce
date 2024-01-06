<template>
  <div class="login">
    <AuthNavBar title="Đăng Nhập" />

    <div class="authForm">
      <div class="container">
        <form action="" @submit.prevent="onSubmit">
          <div class="authForm__main">
            <div class="authForm__content">
              <h1>Đăng Nhập</h1>
              <div class="input-wrap" :class="{ 'input-wrap--flex-column': emailError.status || emailSuccess.status }">
                <input type="text" placeholder="Email" v-model="formLogin.email" />
                <p class="error-text" v-if="emailError.status">*{{ emailError.messageError }}</p>
                <p class="success-text" v-else-if="emailSuccess.status">
                  {{ emailSuccess.messageSuccess }}
                </p>
              </div>
              <div
                class="input-wrap"
                :class="{ 'input-wrap--flex-column': passwordError.status || passwordSuccess.status }"
              >
                <input type="password" placeholder="Password" v-model="formLogin.password" />
                <p class="error-text" v-if="passwordError.status">*{{ passwordError.messageError }}</p>
                <p class="success-text" v-else-if="passwordSuccess.status">
                  {{ passwordSuccess.messageSuccess }}
                </p>
              </div>
              <button class="button">Đăng Nhập</button>
              <div class="span-group">
                <span>Bạn chưa có tài khoản? </span>
                <span>
                  <router-link :to="{ name: 'register' }" exact>Đăng ký</router-link>
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
import { validateField } from 'src/utils/rules';
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user.store';
import { isAxiosUnprocessableEntityError } from 'src/utils/utils';
import { ErrorResponseApi } from 'src/types/utils.type';
import { FormDataUser } from 'src/types/auth.type';

const formLogin = ref({
  email: '',
  password: ''
});

const userStore = useUserStore();

const emailError = ref({ messageError: '', status: false });
const passwordError = ref({ messageError: '', status: false });

const emailSuccess = ref({ messageSuccess: '', status: false });
const passwordSuccess = ref({ messageSuccess: '', status: false });

//Validate Way 1
// const onSubmit = () => {
//   const emailRegex = /\S+@\S+\.\S+/;
//   const passwordRegex = /^(?=.*[A-Z]).{6,15}$/;

//   let isEmailValid = false;
//   let isPasswordValid = false;

//   if (formLogin.value.email === '') {
//     emailError.value = {
//       messageError: 'Please enter email',
//       status: true
//     };
//     emailSuccess.value = {
//       messageSuccess: '',
//       status: false
//     };
//   } else if (!emailRegex.test(formLogin.value.email)) {
//     emailError.value = {
//       messageError: 'Invalid email format',
//       status: true
//     };
//     emailSuccess.value = {
//       messageSuccess: '',
//       status: false
//     };
//   } else {
//     emailSuccess.value = {
//       messageSuccess: 'Look great!',
//       status: true
//     };
//     emailError.value = {
//       messageError: '',
//       status: false
//     };

//     isEmailValid = true;
//   }

//   if (formLogin.value.password === '') {
//     passwordError.value = {
//       messageError: 'Please enter password',
//       status: true
//     };
//     passwordSuccess.value = {
//       messageSuccess: '',
//       status: false
//     };
//   } else if (!passwordRegex.test(formLogin.value.password)) {
//     passwordError.value = {
//       messageError:
//         'Please enter the correct password with at least 1 capital letter, minimum 6 characters, maximum 15 characters',
//       status: true
//     };
//     passwordSuccess.value = {
//       messageSuccess: '',
//       status: false
//     };
//   } else {
//     passwordSuccess.value = {
//       messageSuccess: 'Look great!',
//       status: true
//     };
//     passwordError.value = {
//       messageError: '',
//       status: false
//     };

//     isPasswordValid = true;
//   }

//   if (isEmailValid && isPasswordValid) {
//     console.log(formLogin.value);
//   }
// };

const onSubmit = async () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[A-Z]).{6,15}$/;

  const isEmailValid = validateField(
    'email',
    formLogin.value.email,
    emailRegex,
    emailError,
    emailSuccess,
    'Email không đúng định dạng'
  );

  const isPasswordValid = validateField(
    'password',
    formLogin.value.password,
    passwordRegex,
    passwordError,
    passwordSuccess,
    'Password không đúng'
  );

  if (isEmailValid && isPasswordValid) {
    console.log(formLogin.value);
    try {
      // Call the action to register the user
      const response = await userStore.loginUser(formLogin.value);
      console.log(response, 'rrrrrrrrrrr');
    } catch (error) {
      console.log(error, 'eeeeeeee');
      if (isAxiosUnprocessableEntityError<ErrorResponseApi<Omit<FormDataUser, 'confirm_password'>>>(error)) {
        console.log(error, 'errrrrrrrrrr');
        const formError = error.response?.data.data;

        if (formError?.email) {
          emailError.value = {
            messageError: formError.email,
            status: true
          };
        }
        if (formError?.password) {
          passwordError.value = {
            messageError: formError.password,
            status: true
          };
        }
      }
    }
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
