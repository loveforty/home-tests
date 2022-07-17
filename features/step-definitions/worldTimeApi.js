const { Given, When, Then } = require('@wdio/cucumber-framework');
const timeHelper = require('../../config/apiHelper');

let worldContent;
let regionContent;
let cityContent;
let positionValue;

Given(/^Max GET requests (.*)$/, async (path) => {
  worldContent = await timeHelper.getTimeRequest(path);
});

Then(/^Max validates received results (\w+) and (.*)$/, async (responseCode, responseBody) => {
  expect(worldContent.status).toBe(parseInt(responseCode));
  expect(JSON.stringify(worldContent.body)).toBe(responseBody);
  expect(worldContent.body).toHaveText([/errors\b/]);
});

Given(/^Max obtains WorldTimeApi list$/, async () => {
  regionContent = await timeHelper.getRegionRequest();
});

When(/^Max obtains timezone of 45th position$/, async () => {
  positionValue = regionContent.body[44];
  cityContent = await timeHelper.getCityRequest(positionValue);
});

Then(/^Max confirms response and regular expression elements$/, async () => {
  expect(cityContent.status).toBe(200);
  expect(cityContent.body.timezone).toEqual(positionValue);
  expect(cityContent.body.unixtime).toHaveText([/d/]);
  expect(cityContent.body.client_ip).toHaveText([/([a-f0-9:]+:+)+[a-f0-9]+/]);
});
