"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scenario_steps_1 = require("../steps/scenario/scenario_steps");
describe("Scenrio 1: A user should be able to", function () {
    it('change the default value 15 range slider to 95', function () {
        new scenario_steps_1.ScenarioSteps().navigateToSeleniumPlaygroundInputForm()
            .navigateToDragAndDropSlidersPage()
            .dargValueTo95();
    });
});
