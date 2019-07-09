import { BeforeAll, Before } from "cucumber";

Before(function (this:any) {
    const env = require("../../configs/envConfigs.json")["env"];
    const envConfig = require("../../configs/envConfigs.json")
    this.envConfig = envConfig[env];
});