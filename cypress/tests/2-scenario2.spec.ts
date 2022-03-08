import { ScenarioSteps } from "../steps/scenario/scenario_steps";

describe("Scenrio 2: A user should be able to", () => {

    it('input form, submit it and validate it', function () {
        new ScenarioSteps().navigateToSeleniumPlayground()
            .changePort()
            .clickInputFormSubmit()
            .verifyaccessibilityStandard()
            .fillForm()
            .submitForm()
            .verifyPerformance()
            .validateMessage()
    });
});
