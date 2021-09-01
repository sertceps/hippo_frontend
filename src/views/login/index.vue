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
      <n-row :gutter="[0, 24]">
        <n-col :span="24">
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
        </n-col>
      </n-row>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
  import { Md5 } from 'ts-md5';
  import { ref } from 'vue';
  import { login } from '@/api/user';
  import { useMessage } from 'naive-ui';
  import router from '@/router';

  // name: "Login";
  const formRef = ref(null);
  const modelRef = ref({
    email: '',
    password: '',
  });
  const message = useMessage();

  const validateEmail = (rule: any, value: string) => {
    return !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
      ? new Error('邮箱格式不正确')
      : true;
  };

  const loginHandle = async () => {
    try {
      await login(modelRef.value.email, modelRef.value.password);
      message.success('登录成功');
      // router.replace('/'); // 不会刷新页面？
      router.push({ path: '/' });
    } catch (err) {
      message.error(err);
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
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
  }
  .login {
    width: 400px;
    transform: translateY(-50%);
  }

  .validate-btn {
    display: flex;
    justify-content: flex-end;
  }
</style>
>
