const fs = require("fs")
const sites_using_react = "./assets/sites_using_react/"
const sites_using_react_native = "./assets/sites_using_react_native/"
let res = []
const reactNames = () => fs.readdirSync(sites_using_react, (err, items) => ({ names: items }))
const reactNativeNames = () => fs.readdirSync(sites_using_react_native, (err, items) => ({ names: items }))
fs.writeFile(
    "./assetFileNames.js",
    `export const names = {
        react: ${JSON.stringify(reactNames())},
        reactNative: ${JSON.stringify(reactNativeNames())},
 }`,
    (err) => (err ? console.log(err) : console.log("\n***** updated file names successfuly\n"))
)
