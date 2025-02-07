import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@noir-lang/noirc_abi', '@noir-lang/acvm_js']
  }
});
