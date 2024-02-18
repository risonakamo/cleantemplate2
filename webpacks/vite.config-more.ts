// vite config with additional examples of options. copy to normal vite config as needed

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import {RollupWarning,WarningHandler} from "rollup";

declare const __dirname:string;

export default defineConfig({
    baseUrl:"/somewhere/",

    root:`${__dirname}/web/html`,
    // matches .env name (ex: .env.custommode). "development" selects .env with no name
    mode:"development",
    envDir:`${__dirname}/viteenv`,
    publicDir:`${__dirname}/web/public`,

    plugins:[
        react(),
        checker({
            typescript:{
                // select alternate tsconfig for build vscode's tsconfig
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
            hooks:`${__dirname}/web/hooks`,
            store:`${__dirname}/web/store`,
            assets:`${__dirname}/web/assets`
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
        sourcemap:true,

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