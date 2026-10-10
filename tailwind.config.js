/** @type {import('tailwindcss').Config} */
export default {
    content:[
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme:{
        extend:{
            colors:{
                ink: '#05070b',
                panel: '#0f1420',
                emerald: '#00f076',
                ember: '#00f076',
                gold: '#f5c451',
                crimson: '#dc2626',
                muted: '#94a3b8'
            },
            boxShadow:{
                cinema: '0 20px 60px rgba(0,0,0,.6), 0 0 30px rgba(0,240,118,0.2)',
                doom: '0 0 25px rgba(0,240,118,0.3), inset 0 0 15px rgba(0,240,118,0.08)'
            }
        }
    },
    plugins:[]
};
