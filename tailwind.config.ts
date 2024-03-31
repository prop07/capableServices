import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#326fd1",
        secondary: '#000000',
        whatsappGreen: '#25D366',
        facebookBlue: '#1877F2',
        instagramPurple: '#C13584',
      },
      boxShadow:{
        "16Shadow": '-16px 16px',
        '8Shadow':'-8px 8px',
        'buttonShadow': ' -6px 6px'
      },
    },
  },
  plugins: [],
};
export default config;
