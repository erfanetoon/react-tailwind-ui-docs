const plugin = require("tailwindcss/plugin");
const withTailwind = require("@erfanetoon/react-tailwind-ui/withTailwind");

/** @type {import('tailwindcss').Config} */
module.exports = withTailwind({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {},
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                ".direction-ltr": {
                    direction: "ltr",
                },
                ".direction-rtl": {
                    direction: "rtl",
                },
            };

            addUtilities(newUtilities);
        }),
    ],
});
