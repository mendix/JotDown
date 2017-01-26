"use strict"

const fs = require("fs")
const path = require("path")

const rootDir = path.join(__dirname, "..")
const srcDir = path.join(rootDir, "src")
const tmpDir = path.join(rootDir, ".tmp")
if (!fs.existsSync(tmpDir))
    fs.mkdirSync(tmpDir)

let files = fs.readdirSync(srcDir)
files.sort()

fs.writeFileSync(
    path.join(tmpDir, "slides.md"),
    files
        .filter(f => /\.md$/.test(f))
        .map(f => (
            "<!-- " + f + "-->\n\n" +
            fs.readFileSync(path.join(srcDir, f), "utf8")
        ))
        .join("\n---\n"),
    "utf8"
)
