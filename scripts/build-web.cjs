"use strict";

const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const webRoot = path.join(projectRoot, "www");

fs.mkdirSync(webRoot, { recursive: true });

for (const file of ["index.html", "styles.css", "app.js"]) {
  fs.copyFileSync(path.join(projectRoot, file), path.join(webRoot, file));
}

console.log("Copied the offline web app to www/.");
