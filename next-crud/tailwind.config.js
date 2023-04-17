module.exports = {
  purge: {
    content: [
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist : [
      /^bg-/,
      /^to-/,
      /^from-/
    ]
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

