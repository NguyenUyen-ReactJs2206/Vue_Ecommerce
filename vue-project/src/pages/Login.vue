<template>
  <div class="login">
    <AuthNavBar title="Đăng Nhập" />

    <div class="authForm">
      <div class="container">
        <form action="">
          <div class="authForm__main">
            <div class="authForm__content">
              <h1>Đăng Nhập</h1>
              <div class="input-wrap">
                <input type="text" placeholder="Email" />
              </div>
              <div class="input-wrap">
                <input type="text" placeholder="Password" />
              </div>
              <button>Đăng Nhập</button>
              <div class="span-group">
                <span>Bạn chưa có tài khoản? </span>
                <span>
                  <router-link to="{ name: 'register' }">Đăng ký</router-link>
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
</script>

<style></style>
