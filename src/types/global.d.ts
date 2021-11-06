import { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider';

/** 在 Window 上声明 $message 属性 */
declare global {
  interface Window {
    $message: MessageApiInjection;
  }
}
