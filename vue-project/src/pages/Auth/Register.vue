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
                <input type="password" placeholder="Confirm Password" v-model="formRegister.confirm_password" />
                <p class="error-text" v-if="confirmPasswordError.status">*{{ confirmPasswordError.messageError }}</p>
                <p class="success-text" v-else-if="confirmPasswordSuccess.status">
                  {{ confirmPasswordSuccess.messageSuccess }}
                </p>
              </div>
              <ButtonAuth title="Đăng Ký" />
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
import ButtonAuth from 'src/components/ButtonAuth/ButtonAuth.vue';
import { ref } from 'vue';
import { validateField } from 'src/utils/rules.ts';
import { useUserStore } from 'src/stores/user.store';
import { isAxiosUnprocessableEntityError } from 'src/utils/utils.ts';
import { ErrorResponseApi } from 'src/types/utils.type';
import { FormDataUser } from 'src/types/auth.type';
import { useRouter } from 'vue-router';

const formRegister = ref({
  email: '',
  password: '',
  confirm_password: ''
});

const router = useRouter();
const userStore = useUserStore();

//Validate Message for Email and Password
const emailError = ref({ messageError: '', status: false });
const passwordError = ref({ messageError: '', status: false });
const confirmPasswordError = ref({ messageError: '', status: false });

const emailSuccess = ref({ messageSuccess: '', status: false });
const passwordSuccess = ref({ messageSuccess: '', status: false });
const confirmPasswordSuccess = ref({ messageSuccess: '', status: false });

//Event Submit Form
const onSubmit = async () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[A-Z]).{6,15}$/;

  const isEmailValid = validateField(
    'email',
    formRegister.value.email,
    emailRegex,
    emailError,
    emailSuccess,
    'Email không đúng định dạng'
  );

  const isPasswordValid = validateField(
    'password',
    formRegister.value.password,
    passwordRegex,
    passwordError,
    passwordSuccess,
    'Vui lòng nhập đúng mật khẩu có ít nhất 1 chữ in hoa, tối thiểu 6 ký tự, tối đa 15 ký tự'
  );

  //Check Confirm_Password
  const isPasswordMatched = formRegister.value.password === formRegister.value.confirm_password;

  if (!isPasswordMatched) {
    confirmPasswordError.value = {
      messageError: 'Password và confirm password không khớp',
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

  //Post FormData to the Server
  if (isEmailValid && isPasswordValid && isPasswordMatched) {
    console.log(formRegister.value);
    try {
      // Call the action to register the user
      const response = await userStore.registerUser(formRegister.value);

      //set token
      userStore.setIsAuthenticated(true);

      //save profile
      userStore.setProfile(response.data.data.user);

      //navigate
      router.push({
        name: 'login'
      });
    } catch (error) {
      userStore.setIsLoading(false);
      if (isAxiosUnprocessableEntityError<ErrorResponseApi<FormDataUser>>(error)) {
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
