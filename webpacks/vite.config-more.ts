// vite config with additional examples of options

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import {RollupWarning,WarningHandler} from "rollup";

declare const __dirname:string;

export default defineConfig({
    root:`${__dirname}/web/html`,
    mode:"development",

    plugins:[
        react(),
        checker({
            typescript:{
                tsconfigPath:"tsconfig.vite.json"
            }
        })
    ],

    resolve:{
        alias:{
            components:`${__dirname}/web/components`,
            lib:`${__dirname}/web/lib`,
            css:`${__dirname}/web/css`,
            apis:`${__dirname}/web/apis`,
            hooks:`${__dirname}/web/hooks`
        }
    },

    server:{
        port:4000,
        hmr:false
    },

    build:{
        outDir:`${__dirname}/build`,
        target:["esnext"],
        emptyOutDir:true,

        chunkSizeWarningLimit:1000,
        rollupOptions:{
            input:{
                index:`${__dirname}/web/html/index.html`,
                analytics:`${__dirname}/web/html/page2/index.html`
            },

            onwarn:(warning:RollupWarning,defaultHandler:WarningHandler)=>{
                defaultHandler(warning);
            }
        }
    }
});