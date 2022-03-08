export abstract class Steps {
    protected _commandState: Cypress.Chainable;

    constructor(previousSteps?: Steps) {
        if (previousSteps != null) {
            this._commandState = previousSteps._commandState;
        }
    }
}
