// login handle
import { login } from "@/api/user";
import router from "@/router";
import { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";

export function useLogin(message: MessageApiInjection) {

  const loginHandle = async (email: string, password: string) => {
    try {
      console.log(password);

      await login(email, password);
      message.success("登录成功");
      router.replace("/");
    } catch (err) {
      console.log('this');
      message.error(err);
    }
  };

  return loginHandle
}


