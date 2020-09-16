const req= require('request-promise');
const fs = require('fs');
const cheerio = require('cheerio');

async function main (){
const html = await req.get("https://reactnativetutorial.net/css-selectors/"); // fetches the entire html page
fs.writeFileSync('./test.html', html); // write it into a temp file
const $ = await cheerio.load(html);
const text = $('h1').text();
// to scrape using class '.<classname>'
// to scrape using id '#<idname>'
console.log(text);
}
main();