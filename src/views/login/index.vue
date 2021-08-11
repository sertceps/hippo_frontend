<template>
  <div class="login-parent">
    <n-form class="login"
      :model="model"
      ref="formRef"
      :rules="rules">
      <n-form-item path="email"
        label="邮箱">
        <n-input v-model:value="model.email"
          @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password"
        label="密码">
        <n-input v-model:value="model.password"
          type="password"
          @keydown.enter.prevent />
      </n-form-item>
      <n-row :gutter="[0, 24]">
        <n-col :span="24">
          <div class="validate-btn">
            <n-button @click="loginHandle(message)"
              :disabled="model.email === null"
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
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import { login } from "@/api/user";
import router from "@/router";
import { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";

export default defineComponent({
  name: "Login",

  setup() {
    const formRef = ref(null);
    const rPasswordFormItemRef = ref(null);
    const message = useMessage();
    const modelRef = ref({
      email: "admin@admin.com",
      password: "admin",
    });

    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      loginHandle,
      message,
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

// login handle
const loginHandle = async (message: MessageApiInjection) => {
  try {
    const res = await login({
      email: "admin@admin.com",
      password: "admin",
    });
    message.success("登录成功");
    router.push("/");
  } catch (err) {
    message.warning(err);
    console.log(err);
  }
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
