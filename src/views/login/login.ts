// login handle

import { login } from "@/api/user";
import router from "@/router";
import { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";

export function useLogin(message: MessageApiInjection) {
  const loginHandle = async () => {
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

  return loginHandle
}


