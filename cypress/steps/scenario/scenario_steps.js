"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioSteps = void 0;
var steps_1 = require("../common/steps");
var faker_1 = __importDefault(require("@faker-js/faker"));
var ScenarioSteps = /** @class */ (function (_super) {
    __extends(ScenarioSteps, _super);
    function ScenarioSteps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScenarioSteps.prototype.navigateToSeleniumPlaygroundInputForm = function () {
        cy.visit('selenium-playground/input-form-demo');
        return this;
    };
    ScenarioSteps.prototype.navigateToSeleniumPlayground = function () {
        cy.visit('selenium-playground');
        return this;
    };
    ScenarioSteps.prototype.navigateToDragAndDropSlidersPage = function () {
        //using xpath
        cy.xpath('//p[contains(text(), "Progress Bar & Sliders")]').click();
        cy.get(':nth-child(4) > .list-disc > :nth-child(3) > .text-size-14').click();
        cy.get('h1:contains("File Download Demo")').should('be.visible');
        return this;
    };
    ScenarioSteps.prototype.dargValueTo95 = function () {
        var value = 95;
        cy.get('h1:contains("File Download Demo")').scrollIntoView();
        //mouse event
        cy.get('div.sp__range.sp__range-success>input').invoke('val', value).trigger('change');
        cy.get('output#rangeSuccess').invoke('val', value).trigger('change');
        //assertion
        cy.get('output#rangeSuccess').should('have.text', value);
        return this;
    };
    ScenarioSteps.prototype.changePort = function () {
        cy.intercept('POST', '/collect').as('waitToLoad');
        cy.viewport('samsung-note9');
        cy.wait('@waitToLoad');
        return this;
    };
    ScenarioSteps.prototype.clickInputFormSubmit = function () {
        cy.get(':nth-child(1) > :nth-child(1) > .list-disc > :nth-child(5) > .text-black').click();
        return this;
    };
    ScenarioSteps.prototype.verifyaccessibilityStandard = function () {
        cy.lighthouse({
            accessibility: 50
        });
        return this;
    };
    ScenarioSteps.prototype.fillForm = function () {
        cy.get('h2:contains("Input form with validations.")').scrollIntoView();
        cy.get('#name').type(faker_1.default.name.firstName());
        cy.get('#inputEmail4').type(faker_1.default.internet.email());
        cy.get('#inputPassword4').type(faker_1.default.internet.password());
        cy.get('#company').type(faker_1.default.company.companyName());
        cy.get('#websitename').type(faker_1.default.internet.domainName());
        cy.get('select[name="country"]').select('IN');
        cy.get('#inputCity').type(faker_1.default.address.cityName());
        cy.get('#inputAddress1').type(faker_1.default.address.streetName());
        cy.get('#inputAddress2').type(faker_1.default.address.streetSuffix());
        cy.get('#inputState').type(faker_1.default.address.state());
        cy.get('#inputZip').type(faker_1.default.address.zipCode());
        return this;
    };
    ScenarioSteps.prototype.submitForm = function () {
        cy.get('.btn').click();
        return this;
    };
    ScenarioSteps.prototype.verifyPerformance = function () {
        cy.lighthouse({
            performance: 50
        });
        return this;
    };
    ScenarioSteps.prototype.validateMessage = function () {
        cy.get('.success-msg').should('be.visible').should('contain', 'Thanks for contacting us, we will get back to you shortly.');
        return this;
    };
    return ScenarioSteps;
}(steps_1.Steps));
exports.ScenarioSteps = ScenarioSteps;
