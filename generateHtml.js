const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const handlebars = require('handlebars');
const path = require('path');

(async () => {

    const templatePath = path.join(__dirname, 'template.html');
    const headerPath = path.join(__dirname, 'partials', 'header.html');
    const footerPath = path.join(__dirname, 'partials', 'footer.html');

    const templateHtml = await fs.readFile(templatePath, 'utf8');
    const headerHtml = await fs.readFile(headerPath, 'utf8');
    const footerHtml = await fs.readFile(footerPath, 'utf8');

    handlebars.registerPartial('header', headerHtml);
    handlebars.registerPartial('footer', footerHtml);
    const template = handlebars.compile(templateHtml);
    const finalHtml = template({});
    await fs.writeFile('finalTemplate.html', finalHtml, 'utf8');

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`file://${path.join(__dirname, 'finalTemplate.html')}`, { waitUntil: 'networkidle0' });
    console.log("Ruunning")
})();









