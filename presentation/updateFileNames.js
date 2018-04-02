var fs = require("fs")
var sites = "./assets/sites_using_react/"
let res = []
const filenames = () => fs.readdirSync(sites, (err, items) => ({ names: items }))
fs.writeFile(
    "./assetFileNames.js",
    `export const names = ${JSON.stringify(filenames())}`,
    (err) => (err ? console.log(err) : console.log("\n***** updated file names successfuly\n"))
)
