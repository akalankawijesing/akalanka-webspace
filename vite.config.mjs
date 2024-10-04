import { defineConfig } from 'npm:vite@^5.2.10'
import react from 'npm:@vitejs/plugin-react-swc@^3.5.0'

import 'npm:react@^18.2.0'
import 'npm:react-dom@^18.2.0'
import "npm:react-router-dom@^6.4";
import 'npm:typewriter-effect@^2.21.0'
import 'npm:react-type-animation@^3.2.0'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
