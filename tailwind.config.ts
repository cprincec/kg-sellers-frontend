import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	
  	extend: {
		screens: {
			'lg': '1060px',
		},
		boxShadow: {
			'input-shadow': '0px 0px 0px 3px #C6EDDD',
			'box': '0px 0.75px 2.25px 0px #1018281A 0px 0.75px 1.5px 0px #1018280F',
		},
		colors: {
  			kaiglo_grey: {
  				'50': '#F9FAFB',
				'200': '#EAECF0',
  				'100': '#F2F4F7',
				'400': '#98A2B3',
  				'500': '#667085',
				'600': '#667085',
  				'700': '#344054',
				'800': '#1D2939',
				'900': '#101828',
  				base: '#475467',
  				disabled: '#D0D5DD',
  				placeholder: '#98A2B3'
  			},
  			kaiglo_brand: {
  				'50': '#E5FFF4',
  				'100': '#D1FFEC',
  				'200': '#A3FFD9',
  				'300': '#75FFC6',
  				'400': '#47FFB3',
  				'500': '#1AFF9F',
  				'600': '#00EB89',
  				'700': '#00BD6E',
  				'800': '#008F53',
  				'900': '#006139',
  				base: '#007A49'
  			},
  			kaiglo_info: {
  				'50': '#E8F2FC',
  				'100': '#D6E7FA',
  				'200': '#AECFF4',
  				'300': '#85B7EF',
  				'400': '#5D9EEA',
  				'500': '#3486E5',
  				'600': '#1B6FD0',
  				'700': '#165AA7',
  				'800': '#10447E',
  				'900': '#0B2E56',
  				base: '#1C73DC'
  			},
  			kaiglo_success: {
				'5': '#C6EDDD',
				'25': '#F6FEF9',
  				'50': '#ECFDF3',
  				'100': '#D1FFD1',
  				'200': '#A3FFA3',
  				'300': '#75FF75',
  				'400': '#47FF47',
  				'500': '#1AFF1A',
  				'600': '#039855',
  				'700': '#00BD00',
  				'800': '#05603A',
  				'900': '#006100',
  				base: ' #007A49',
				light: '#008000'
  			},
  			kaiglo_attention: {
  				'50': '#FFEEE5',
  				'100': '#FFE0D1',
  				'200': '#FFC2A3',
  				'300': '#FFA375',
  				'400': '#FF8547',
  				'500': '#F79009',
  				'600': '#EB4E00',
  				'700': '#BD3F00',
  				'800': '#8F3000',
  				'900': '#612000',
  				base: '#FF6617'
  			},
  			kaiglo_critical: {
  				'50': '#FFE5E7',
  				'100': '#FFD1D3',
  				'200': '#FFA3A8',
  				'300': '#FF757C',
  				'400': '#FF4751',
  				'500': '#FF1A25',
  				'600': '#EB000C',
  				'700': '#BD0009',
  				'800': '#8F0007',
  				'900': '#610005',
  				base: '#FF242C',
				error: '#F04438'
  			},
  			kaiglo_accent: {
  				'50': '#FFF7E5',
  				'100': '#FFF1D1',
  				'200': '#FFE3A3',
  				'300': '#FFD675',
  				'400': '#FFC847',
  				'500': '#FFBA1A',
  				'600': '#EBA400',
  				'700': '#BD8400',
  				'800': '#8F6400',
  				'900': '#614400',
  				base: '#FFC12E'
  			},
  			kaiglo_purple: {
  				'50': '#F5E8FD',
  				'100': '#ECD5FB',
  				'200': '#DAABF7',
  				'300': '#DAABF7',
  				'400': '#B557EF',
  				'500': '#A22DEB',
  				'600': '#8C14D7',
  				'700': '#7110AD',
  				'800': '#550C83',
  				'900': '#3A0859',
  				base: '#8312C9'
  			},
  			kaiglo_pink: {
  				'50': '#FFE6F5',
  				'100': '#FFD1ED',
  				'200': '#FFA4DC',
  				'300': '#FE76CA',
  				'400': '#FE1BA7',
  				'500': '#FE1BA7',
  				'600': '#E90190',
  				'700': '#BC0174',
  				'800': '#8E0158',
  				'900': '#60003C',
  				base: '#FE019A'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		keyframes: {
			slideDownFade: {
			  '0%': { opacity: "0", transform: 'translateY(-10px)' },
			  '100%': { opacity: "1", transform: 'translateY(0)' },
			},
			slideUpFade: {
			  '0%': { opacity: "1", transform: 'translateY(0)' },
			  '100%': { opacity: "0", transform: 'translateY(-10px)' },
			},
		},
		animation: {
			slideDownFade: 'slideDownFade 0.3s ease-out',
			slideUpFade: 'slideUpFade 0.2s ease-in',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
