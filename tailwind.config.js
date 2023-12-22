const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px"
            },
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans]
            },
            fontSize: {
                "header-1": "4rem",
                "header-2": "2.75rem",
                "header-3": "2rem",
                "header-4": "1.5rem",
                "header-5": "1.25rem",
                subtitle: "1.25rem",
                paragraph: "1rem",
                "strong-text": "1rem",
                "pre-title": "0.875rem",
                "button-text": "0.875rem"
            },
            fontWeight: {
                thin: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                black: "900"
            },
            letterSpacing: {
                tight: "-.025em",
                normal: "0",
                wide: ".025em",
                wider: ".05em",
                widest: ".25em"
            },
            colors: {
                primary: "#FB8500",
                secondary: "#FFB703",
                dark: "##d61c38",
                danger: "#d61c38",
                success: "#00c441",
                contentLight: "#19191B",
                contentDark: "#FDFDFD",
                primaryLight: "#FFE0BC",
                grey: "#B0B0B0",
                greyDark: "#848484",
                accent: "#ECF1F4",
                lightBG: "#F8F8F8",
                fail: "#FF0000",
                gradient1: "#375FEF",
                gradient2: "#FFE6B5",
                gradient3: "#FFB703"
            },
            spacing: {
                1: "8px",
                2: "16px",
                3: "24px",
                4: "32px",
                5: "40px",
                6: "48px",
                7: "56px",
                8: "64px"
            },
            padding: {
                2: "16px",
                4: "32px",
                6: "48px",
                8: "64px",
                10: "80px",
                12: "96px",
                14: "112px",
                16: "128px"
            },
            borderRadius: {
                1: "5px",
                2: "10px"
            },
            borderColor: {
                borderColor1: "#F6FFBE",
                borderColor2: "#2555FF",
                borderColor3: "#FFE259",
                borderColor4: "#FF76E1",
                borderColor5: "#923CFF",
                borderColor6: "#F0F3FF"
            }
        }
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
}
