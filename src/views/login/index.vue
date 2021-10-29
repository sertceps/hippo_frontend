<template>
  <div class="login-parent">
    <n-form class="login" :model="modelRef" ref="formRef" :rules="rules">
      <n-form-item path="email" label="邮箱">
        <n-input v-model:value="modelRef.email" placeholder="请输入邮箱" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input
          v-model:value="modelRef.password"
          type="password"
          placeholder="请输入密码"
          @keydown.enter.prevent
          @keyup.enter="loginHandle"
        />
      </n-form-item>
      <div class="validate-btn">
        <n-button
          @click="loginHandle"
          :disabled="modelRef.email === '' || modelRef.password === ''"
          round
          type="primary"
        >
          验证
        </n-button>
      </div>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
  import { Md5 } from 'ts-md5';
  import { computed, ref } from 'vue';
  import { loginApi } from '@/api/login/user';
  import { useMessage } from 'naive-ui';
  import router from '@/router';
  import { useUserStore } from '@/store';

  const formRef = ref(null);
  const modelRef = ref({
    email: '',
    password: '',
  });
  const message = useMessage();

  const validateEmail = (rule: any, value: string) => {
    return !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) ? new Error('邮箱格式不正确') : true;
  };

  const userStore = useUserStore();

  const loginHandle = async () => {
    try {
      const { access_token, jwt_expires_in } = await loginApi(
        modelRef.value.email,
        Md5.hashStr(modelRef.value.password)
      );
      userStore.setToken(access_token);
      message.success('登录成功');
      router.replace('/');
    } catch (err) {
      message.error(err as string);
    }
  };

  const rules = {
    email: [
      { validator: validateEmail, trigger: ['input', 'blur'] },
      { required: true, message: '请输入邮箱', trigger: ['blur'] },
    ],
    password: [{ required: true, message: '请输入密码', trigger: ['blur'] }],
  };
</script>

<style scoped>
  .login-parent {
    display: grid;
    height: calc(100vh - 64px);
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
  .login {
    grid-column: 5 / span 4;
    grid-row: 4 / span 3;
    min-width: 300px;
  }

  .validate-btn {
    display: flex;
    justify-content: end;
  }
</style>
// https://cloud.tencent.com/developer/article/1446922 // 异常处理
