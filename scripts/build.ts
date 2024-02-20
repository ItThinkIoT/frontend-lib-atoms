import { Atomic, IAtomicConfig } from "atomicreact-ts"

export const buildConfig: IAtomicConfig = {
    indexScriptFilePath: "src/demo.tsx",
    outScriptFilePath: "public/libs/atomicreact/atomicreact.js",
    outStyleFilePath: "public/libs/atomicreact/atomicreact.css",
    verbose: false,
    minify: {
        js: true,
        css: true,
    }
}

export async function build() {
    return await (new Atomic(buildConfig)).bundle()
}

build()