import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	// plugins: [react()],
	plugins: [react(), svgr()],
	build: {
		outDir: '../backend/public',
		emptyOutDir: true,
	},
})
