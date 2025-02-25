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
  		colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
				  DEFAULT: "hsl(228, 75, 30)",
				  foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
				  DEFAULT: "hsl(228, 75, 32)",
				  foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
				  DEFAULT: "hsl(var(--destructive))",
				  foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
				  DEFAULT: "hsl(var(--muted))",
				  foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
				  DEFAULT: "hsl(var(--accent))",
				  foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
				  DEFAULT: "hsl(212, 83, 59)",
				  foreground: "hsl(var(--popover-foreground))",
				},
				card: {
				  DEFAULT: "hsl(var(--card))",
				  foreground: "hsl(var(--card-foreground))",
				},
			
			
			other:'hsl(212, 83, 59)',
			white:'hsl(213, 36, 95)',
  			
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		fontFamily:{
			other:['var(--font-exo)'],
			secondary:['var(--font-roboto)'],
			primary:['var(--font-sora)']
		},
		fontSize:{
			"brand":"25px",
			"primary":"20px ",
			"secondary":"18px",
			"other":"12px"
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  keyframes: {
	"accordion-down": {
	  from: { height: "0" },
	  to: { height: "var(--radix-accordion-content-height)" },
	},
	"accordion-up": {
	  from: { height: "var(--radix-accordion-content-height)" },
	  to: { height: "0" },
	},
	float: {
	  "0%, 100%": { transform: "translateY(0)" },
	  "50%": { transform: "translateY(-10px)" },
	},
  },
  animation: {
	"accordion-down": "accordion-down 0.2s ease-out",
	"accordion-up": "accordion-up 0.2s ease-out",
	float: "float 6s ease-in-out infinite",
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
