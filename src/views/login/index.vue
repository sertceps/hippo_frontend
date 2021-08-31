<template>
  <div class="login-parent">
    <n-form class="login"
      :model="model"
      ref="formRef"
      :rules="rules">
      <n-form-item path="email"
        label="邮箱">
        <n-input v-model:value="model.email"
          placeholder="请输入邮箱"
          @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password"
        label="密码">
        <n-input v-model:value="model.password"
          type="password"
          placeholder="请输入密码"
          @keydown.enter.prevent
          @keyup.enter="login" />
      </n-form-item>
      <n-row :gutter="[0, 24]">
        <n-col :span="24">
          <div class="validate-btn">
            <n-button @click="login"
              :disabled="model.email === ''"
              round
              type="primary">
              验证
            </n-button>
          </div>
        </n-col>
      </n-row>
    </n-form>
  </div>
</template>

<script lang="ts">
import { Md5 } from "ts-md5";
import { defineComponent, ref } from "vue";
import { useLogin } from "./login";
import { useMessage } from "naive-ui";

export default defineComponent({
  name: "Login",

  setup() {
    const formRef = ref(null);
    const rPasswordFormItemRef = ref(null);
    const modelRef = ref({
      email: "",
      password: "",
    });
    const message = useMessage();
    const loginHandle = useLogin(message);

    const login = () => {
      loginHandle(modelRef.value.email, modelRef.value.password);
    };

    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      loginHandle,
      login,
    };
  },
});

// form rules
const rules = {
  email: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要邮箱");
        } else if (
          !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
        ) {
          return new Error("邮箱格式不正确");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  password: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要密码");
        }
      },
      trigger: ["input", "blur"],
    },
  ],
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
</style>>
