/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height:{
                "12vh":"12vh",
                "88vh":"88vh",
                "2px":"2px"
            },
            backgroundColor:{
                primary:"#cec9c4",
                secondary:"#978d84",
                third: "#685f58",
                forth: "#45382d",
                fifth: "#1c120b",
            },
            colors:{
                primary: "#cec9c4",
                secondary:"#978d84",
                third: "#685f58",
                forth: "#45382d",
                fifth: "#1c120b",
            },
            borderRadius:{
                "4xl":"1.8rem"
            },
        },
    },
    plugins: [],
}