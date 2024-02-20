import { Atomic, HotReload } from "atomicreact-ts"
import express, { Express } from "express"
import { resolve } from "path"

const app: Express = express()

app.use(express.static(resolve(process.cwd(), 'public'))); //static files to web

app.listen(3001, "127.0.0.1"/* "192.168.15.17" */, async () => {
    console.log(`HTTP Web Server is running at`, 'http://localhost:3001');

    let enviroment = (process.argv[2]) ? process.argv[2].toLowerCase() : "production"

    /* If DEVELOPMENT enviroment, build and watch AtomicReact */
    if (["development", "--dev"].includes(enviroment)) {
        const atomic = new Atomic({
            indexScriptFilePath: "src/demo.tsx",
            outScriptFilePath: "public/libs/atomicreact/atomicreact.js",
            outStyleFilePath: "public/libs/atomicreact/atomicreact.css",
            verbose: true,
            minify: {
                js: false,
                css: false,
            }
        })
        new HotReload({
            port: 1718,
            verbose: true,
            atomic
        })

    }
    console.log('Enviroment: ', enviroment)
});