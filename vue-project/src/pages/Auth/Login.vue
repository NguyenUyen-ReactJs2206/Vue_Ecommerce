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
                <input
                  type="text"
                  placeholder="Email"
                  v-model="formLogin.email"
                  :class="{ 'input-success': emailSuccess.status, 'input-error': emailError.status }"
                />
                <p class="error-text" v-if="emailError.status">*{{ emailError.messageError }}</p>
                <p class="success-text" v-else-if="emailSuccess.status">
                  {{ emailSuccess.messageSuccess }}
                </p>
              </div>
              <div
                class="input-wrap"
                :class="{ 'input-wrap--flex-column': passwordError.status || passwordSuccess.status }"
              >
                <input
                  type="password"
                  placeholder="Password"
                  v-model="formLogin.password"
                  :class="{ 'input-success': passwordSuccess.status, 'input-error': passwordError.status }"
                />
                <p class="error-text" v-if="passwordError.status">*{{ passwordError.messageError }}</p>
                <p class="success-text" v-else-if="passwordSuccess.status">
                  {{ passwordSuccess.messageSuccess }}
                </p>
              </div>
              <button>Đăng Nhập</button>
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
import { ref } from 'vue';

const formLogin = ref({
  email: '',
  password: ''
});

const emailError = ref({ messageError: '', status: false });
const passwordError = ref({ messageError: '', status: false });

const emailSuccess = ref({ messageSuccess: '', status: false });
const passwordSuccess = ref({ messageSuccess: '', status: false });

const onSubmit = () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,15}$/;

  if (formLogin.value.email === '') {
    emailError.value = {
      messageError: 'Please enter email',
      status: true
    };
    emailSuccess.value = {
      messageSuccess: '',
      status: false
    };
  } else if (!emailRegex.test(formLogin.value.email)) {
    emailError.value = {
      messageError: 'Invalid email format',
      status: true
    };
    emailSuccess.value = {
      messageSuccess: '',
      status: false
    };
  } else {
    emailSuccess.value = {
      messageSuccess: 'Look great!',
      status: true
    };
    emailError.value = {
      messageError: '',
      status: false
    };
  }

  if (formLogin.value.password === '') {
    passwordError.value = {
      messageError: 'Please enter password',
      status: true
    };
    passwordSuccess.value = {
      messageSuccess: '',
      status: false
    };
  } else if (!passwordRegex.test(formLogin.value.password)) {
    passwordError.value = {
      messageError: 'Invalid password format',
      status: true
    };
    passwordSuccess.value = {
      messageSuccess: '',
      status: false
    };
  } else {
    passwordSuccess.value = {
      messageSuccess: 'Look great!',
      status: true
    };
    passwordError.value = {
      messageError: '',
      status: false
    };
  }

  console.log(formLogin.value);
};
</script>

<style scoped>
.input-wrap--flex-column {
  flex-direction: column;
  gap: 2px;
}

.input-success {
  border: 1px solid var(--success);
}

.input-error {
  border: 1px solid var(--error);
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
