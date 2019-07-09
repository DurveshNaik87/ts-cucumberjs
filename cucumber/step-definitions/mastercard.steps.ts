import { Given, When, Then } from "cucumber";
import { expect } from "chai";

Then(/^I verify the results retrieved$/, function () {
    expect(this.response.body.loginStatus).to.be.equal(this.ApiMockResponse.loginStatus);
    expect(this.response.body.ordinals).to.be.equal(this.ApiMockResponse.ordinals);
    console.log("End of scenario two")
});