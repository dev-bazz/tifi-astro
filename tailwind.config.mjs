/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'noto': ['Noto Sans', 'sans-serif'],
				'plus': ['Plus Jakarta Sans', 'sans-serif'],
				'redhat': ['Red Hat Display', 'sans-serif'],
			},
		},
	},
	plugins: [],
};