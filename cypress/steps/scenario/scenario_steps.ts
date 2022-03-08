import { Steps } from "../common/steps";
import faker, { Faker } from "@faker-js/faker";

export class ScenarioSteps extends Steps {

    public navigateToSeleniumPlaygroundInputForm(): ScenarioSteps {
        cy.visit('selenium-playground/input-form-demo');
        return this;
    }

    public navigateToSeleniumPlayground(): ScenarioSteps {
        cy.visit('selenium-playground');
        return this;
    }

    public navigateToDragAndDropSlidersPage(): ScenarioSteps {
        //using xpath
        cy.xpath('//p[contains(text(), "Progress Bar & Sliders")]').click();
        cy.get(':nth-child(4) > .list-disc > :nth-child(3) > .text-size-14').click();
        cy.get('h1:contains("File Download Demo")').should('be.visible');
        return this;
    }

    public dargValueTo95(): ScenarioSteps {
        const value: number = 95;
        cy.get('h1:contains("File Download Demo")').scrollIntoView();
        //mouse event
        cy.get('div.sp__range.sp__range-success>input').invoke('val', value).trigger('change');
        cy.get('output#rangeSuccess').invoke('val', value).trigger('change');
        //assertion
        cy.get('output#rangeSuccess').should('have.text', value);
        return this;
    }

    public changePort(): ScenarioSteps {
        cy.intercept('POST', '/collect').as('waitToLoad')
        cy.viewport('samsung-note9') 
        cy.wait('@waitToLoad')
        return this;
    }

    public clickInputFormSubmit(): ScenarioSteps {
        cy.get(':nth-child(1) > :nth-child(1) > .list-disc > :nth-child(5) > .text-black').click()
        return this;
    }

    public verifyaccessibilityStandard(): ScenarioSteps {
        cy.lighthouse({
            accessibility: 50
          });
        return this;
    }

    public fillForm(): ScenarioSteps {
        cy.get('h2:contains("Input form with validations.")').scrollIntoView()
        cy.get('#name').type(faker.name.firstName())
        cy.get('#inputEmail4').type(faker.internet.email())
        cy.get('#inputPassword4').type(faker.internet.password())
        cy.get('#company').type(faker.company.companyName())
        cy.get('#websitename').type(faker.internet.domainName())
        cy.get('select[name="country"]').select('IN')
        cy.get('#inputCity').type(faker.address.cityName())
        cy.get('#inputAddress1').type(faker.address.streetName())
        cy.get('#inputAddress2').type(faker.address.streetSuffix())
        cy.get('#inputState').type(faker.address.state())
        cy.get('#inputZip').type(faker.address.zipCode())
        return this;
    }

    public submitForm(): ScenarioSteps {
        cy.get('.btn').click()
        return this;
    }

    public verifyPerformance(): ScenarioSteps {
        cy.lighthouse({
            performance: 50
          });
        return this;
    }

    
    public validateMessage(): ScenarioSteps {
        cy.get('.success-msg').should('be.visible').should('contain', 'Thanks for contacting us, we will get back to you shortly.')
        return this;
    }
    
}

