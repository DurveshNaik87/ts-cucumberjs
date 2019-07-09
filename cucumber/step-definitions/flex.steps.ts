import { Given, When, Then } from "cucumber";
import { expect } from "chai";

Then(/^I verify the public token generated$/, function () {
    expect(this.response.body.der.publicKey).to.be.equal(this.ApiMockResponse.der.publicKey);
    console.log("End of scenario one")
});