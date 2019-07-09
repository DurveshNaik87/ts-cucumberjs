import { expect } from "chai";
import { Given, When, Then } from "cucumber";
import request from "request-promise";
import url from 'url';
import nock from 'nock';


// const flexKeyAPimock = nock(this.envConfig.baseUrl);
const testData: { [key: string]: object } = require("../test-data/test-data.json");
const mockresults: { [key: string]: object } = require("../mock-results/mock.results.json");

Given(/^I create a (get|post|put|patch) request for '(.*)' api$/, function (method: string, resource: string) {
    this.resource = resource;
    this.options = {
        url: url.resolve(this.envConfig.baseUrl, resource),
        method,
        headers: {
            "user-agent": "request"
        },
        json: true,
        resolveWithFullResponse: true,
        qs: {
            "key": "Travelex"
        },
        body: {}
    };
});

When(/^I add query string to the request$/, function (table) {
    const d = table.hashes();

    for (let i in d) {
        this.options.qs[d[i]["key"]] = d[i]["value"];
    }
});

When(/^I add parameters to request with (.*) test data$/, function (testDataId: string) {
    this.options.body = testData[testDataId];
});

When(/^I execute the api$/, async function () {
    this.response = await request(this.options, (err: any, res: any) => {
        if (err)
            return err;
        else
            return res;
    });

    // console.log(JSON.stringify(this.response.body));
});

Then(/^I should get the response with status (.*)$/, function (statusCode: string) {
    expect(this.response.statusCode).to.be.equal(parseInt(statusCode));
});

When(/^I mock (get|post|put|patch) response for (.*)$/, function (method: string, testDataId: string) {

    this.flexAPimock = nock(this.envConfig.baseUrl);
    this.ApiMockResponse = mockresults[testDataId];
    switch (method) {
        case "get":
            this.flexAPimock.get(this.resource)
                .query(this.options.qs)
                .reply(200, this.ApiMockResponse)
            break;
        case "post":
            this.flexAPimock.post(this.resource, testData[testDataId])
                .query(this.options.qs)
                .reply(200, this.ApiMockResponse)
    }
});