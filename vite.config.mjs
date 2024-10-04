import { defineConfig } from 'npm:vite@^5.2.10'
import react from 'npm:@vitejs/plugin-react-swc@^3.5.0'

import 'npm:react@^18.2.0'
import 'npm:react-dom@^18.2.0'
import "npm:react-router-dom@^6.4";
import "npm:@gsap/react@^2.1.1";
import "npm:gsap@^3.12.5";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
