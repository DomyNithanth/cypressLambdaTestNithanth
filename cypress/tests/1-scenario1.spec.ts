import { ScenarioSteps } from "../steps/scenario/scenario_steps";


describe("Scenrio 1: A user should be able to", () => {

    it('change the default value 15 range slider to 95', function () {
       new ScenarioSteps().navigateToSeleniumPlaygroundInputForm()
       .navigateToDragAndDropSlidersPage()
       .dargValueTo95()
    })
})
