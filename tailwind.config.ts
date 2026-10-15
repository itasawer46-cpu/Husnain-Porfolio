import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { bg: "#0b0a1a", card: "#14122b", line: "#272350", mute: "#9a96c4" } } },
  plugins: [],
};
export default config;
