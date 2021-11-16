<template>
  <div class="login-parent">
    <NForm ref="formRef" class="login" :model="modelRef" :rules="rules">
      <NFormItem path="email" label="邮箱">
        <NInput v-model:value="modelRef.email" placeholder="请输入邮箱" @keydown.enter.prevent />
      </NFormItem>
      <NFormItem path="password" label="密码">
        <NInput
          v-model:value="modelRef.password"
          type="password"
          placeholder="请输入密码"
          @keydown.enter.prevent
          @keyup.enter="loginHandle"
        />
      </NFormItem>
      <div class="validate-btn">
        <NButton
          :disabled="modelRef.email === '' || modelRef.password === ''"
          round
          type="primary"
          @click="loginHandle"
        >
          登录
        </NButton>
      </div>
    </NForm>
  </div>
</template>

<script lang="ts" setup>
  import { Md5 } from 'ts-md5';
  import { ref } from 'vue';
  import { useMessage } from 'naive-ui';
  import { loginApi } from '@/api/login/user';
  import router from '@/router';
  import { useUserStore } from '@/store';

  const formRef = ref(null);
  const modelRef = ref({
    email: '',
    password: '',
  });
  const message = useMessage();

  const validateEmail = (rule: any, value: string) =>
    !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) ? new Error('邮箱格式不正确') : true;

  const userStore = useUserStore();

  const loginHandle = async () => {
    const { access_token: accessToken, jwt_expires_in: jwtExpiresIn } = await loginApi(
      modelRef.value.email,
      Md5.hashStr(modelRef.value.password)
    );
    userStore.setToken(accessToken);
    userStore.setExpires(jwtExpiresIn);
    message.success('登录成功');
    // router.replace({ name: 'Home' });
    // 页面不会重载
    router.replace({ path: '/' });
  };

  const rules = {
    email: [
      { validator: validateEmail, trigger: ['input', 'blur'] },
      { required: true, message: '请输入邮箱', trigger: ['blur'] },
    ],
    password: [{ required: true, message: '请输入密码', trigger: ['blur'] }],
  };
</script>

<script lang="ts">
  export default {
    name: 'TheLogin',
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
<!-- // https://cloud.tencent.com/developer/article/1446922 // 异常处理  -->
<!-- // TODO 登录页换成 弹框登录？？ -->
<!-- // TODO 回到顶部小组件 -->

<!-- // TODO　后面基本上是搭积木， -->
<!-- // TODO 在这之前，要吃透路由 -->
<!-- // TODO Vue 原理 -->
<!-- // TODO 自己写组件 -->
<!-- // TODO 权限控制 -->
<!-- // TODO　状态管理 -->
<!-- // TODO 文件上传 -->
<!-- // TODO markdown 编辑器 -->
