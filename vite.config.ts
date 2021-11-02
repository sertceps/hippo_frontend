import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import path from 'path';

const myResolve = (pathName: string) => {
  return path.resolve(__dirname, pathName);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: myResolve('src') }],
  },
});
