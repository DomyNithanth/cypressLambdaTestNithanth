import { ScenarioSteps } from "../steps/scenario/scenario_steps";

describe("Scenrio 2: A user should be able to", () => {

    it('change the default value 15 range slider to 95', function () {
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
