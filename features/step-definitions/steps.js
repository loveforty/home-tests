const { Given, When, Then } = require('@wdio/cucumber-framework');
const searchPage = require('../pageobjects/search.page');

Given('Max goes to Google', async () => {
  await browser.url('https://google.com/');
});

When(/^Max types (\w+) in search box, clicking 'I'm Feeling Lucky' button$/, async (keyword) => {
  await searchPage.search(keyword)
});

Then(/^Max is taken to (.*) of (\w+)$/, async (message, title) => {
  await expect(browser).toHaveUrlContaining(message);
  await expect(browser).toHaveTitleContaining(title);
  await browser.saveScreenshot(`./media/${title}.png`);
});