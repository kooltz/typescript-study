"use strict";
exports.__esModule = true;
var jsdom = require("jsdom").jsdom;
var fs = require("fs");
var html = fs.readFileSync("./index.html", "utf-8");
var doc = jsdom(html);
var window = doc.defaultView;
console.log(window.document.documentElement.outerHTML);
console.log(window.innerWidth);
console.log(typeof window.document.getElementsByClassName);
