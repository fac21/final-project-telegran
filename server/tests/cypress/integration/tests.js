it("can run a test", () => {
  assert.equal(1, 1);
});

it("has a button which navigates to the signup page", () => {
  cy.visit("http://localhost:3000");
  cy.get("button").click();
  cy.url().should("include", "/signup-page");
});

it("signup-page will navigte to video tutorial if slack channel exists", () => {
  cy.visit("http://localhost:3000/signup-page");
  cy.get("input").should("be.visible").type("C0234QPSBK7");
  cy.contains("Connect").click();
  cy.url().should("include", "/video-tutorial");
});

it("won't let users progress if slack channel can't be found", () => {
  cy.visit("http://localhost:3000/signup-page");
  cy.get("input").should("be.visible").type("aaaa");
  cy.contains("Connect").click();
  cy.url().should("include", "/signup-page");
});

it("video tutorial page can naviagate to the right pages", () => {
  cy.visit("http://localhost:3000/video-tutorial");
  cy.get("#written-tut").click();
  cy.url().should("include", "/written-tutorial");
  cy.get("#skip").click();
  cy.url().should("include", "/welcome-page");
});

it("written tuorial page can navigate to the right pages", () => {
  cy.visit("http://localhost:3000/written-tutorial");
  cy.get("#video-tut").click();
  cy.url().should("include", "/video-tutorial");
  cy.get("#skip").click();
  cy.url().should("include", "/welcome-page");
});

it("homepage has a nav with correct links", () => {
  cy.visit("http://localhost:3000/home");
  cy.get("#messages").click();
  cy.url().should("include", "/view-messages");
  cy.get("#write").click();
  cy.url().should("include", "/write-message");
  cy.get("#sos").click();
  cy.url().should("include", "/emergency");
});

it("can post a message to their connected slack channel", () => {
  cy.visit("http://localhost:3000/write-message");
  cy.get("#write-message").type("hi");
  cy.get("#write-message").submit();
  cy.url().should("include", "/message-sent");
});

it("can view messages from their slack channel", () => {
  cy.visit("http://localhost:3000/view-messages");
});

it("can send an automated SOS message to their slack channel", () => {
  cy.visit("http://localhost:3000/emergency");
});
