// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // 필요한 파일 경로를 설정하세요.
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                pretendard: [
                    '"Pretendard Variable"',
                    'Pretendard',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'system-ui',
                    'Roboto',
                    '"Helvetica Neue"',
                    '"Segoe UI"',
                    '"Apple SD Gothic Neo"',
                    '"Noto Sans KR"',
                    '"Malgun Gothic"',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [],
};
