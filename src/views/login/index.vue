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
          @input="handlePasswordInput"
          type="password"
          @keydown.enter.prevent />
      </n-form-item>
      <n-row :gutter="[0, 24]">
        <n-col :span="24">
          <div style="display: flex; justify-content: flex-end;">
            <n-button @click="handleValidateButtonClick"
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

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
  name: "Login",
  components: {},
  setup() {
    const formRef = ref(null);
    const rPasswordFormItemRef = ref(null);
    const message = useMessage();
    const modelRef = ref({
      email: null,
      password: null,
    });
    function validatePasswordStartWith(rule, value) {
      return (
        modelRef.value.password &&
        modelRef.value.password.startsWith(value) &&
        modelRef.value.password.length >= value.length
      );
    }
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules: {
        email: [
          {
            required: true,
            validator(rule, value) {
              if (!value) {
                return new Error("需要邮箱");
              } else if (
                !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
                  value
                )
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
      },
      handleValidateButtonClick(e) {
        e.preventDefault();
        formRef.value.validate((errors) => {
          if (!errors) {
            message.success("验证成功");
          } else {
            console.log(errors);
            message.error("验证失败");
          }
        });
      },
    };
  },
});
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
</style>>
