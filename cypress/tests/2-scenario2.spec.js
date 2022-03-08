"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scenario_steps_1 = require("../steps/scenario/scenario_steps");
describe("Scenrio 2: A user should be able to", function () {
    it('input form, submit it and validate it', function () {
        new scenario_steps_1.ScenarioSteps().navigateToSeleniumPlayground()
            .changePort()
            .clickInputFormSubmit()
            .verifyaccessibilityStandard()
            .fillForm()
            .submitForm()
            .verifyPerformance()
            .validateMessage();
    });
});
