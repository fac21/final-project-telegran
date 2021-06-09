it("can run a test", () => {
  assert.equal(1, 1);
});

it("has a button which navigates to the connect page", () => {
  cy.visit("http://localhost:3000");
  cy.get("button").click();
  cy.url().should("include", "/connect");
});

// it("connect page will navigte to video tutorial if slack channel exists", () => {
//   cy.visit("http://localhost:3000/connect");
//   cy.get("input").should("be.visible").type("C0234QPSBK7");
//   cy.contains("Connect").click();
//   cy.url().should("include", "/video");
// });

// it("won't let users progress if their slack channel can't be found", () => {
//   cy.visit("http://localhost:3000/connect");
//   cy.get("input").should("be.visible").type("aaaa");
//   cy.contains("Connect").click();
//   cy.url().should("include", "/signup-page");
// });

it("video tutorial page can naviagate to the right pages", () => {
  cy.visit("http://localhost:3000/video");
  cy.get("#written").click();
  cy.url().should("include", "/tutorial");
  cy.get("#skip").click();
  cy.url().should("include", "/welcome");
});

it("written tuorial page can navigate to the right pages", () => {
  cy.visit("http://localhost:3000/tutorial");
  cy.get("#video").click();
  cy.url().should("include", "/video");
  cy.get("#skip").click();
  cy.url().should("include", "/welcome");
});

// it("nav has correct links", () => {
//   cy.visit("http://localhost:3000/welcome");
//   cy.get("#messages").click();
//   cy.url().should("include", "/messages");
//   cy.get("#write").click();
//   cy.url().should("include", "/write");
//   cy.get("#sos").click();
//   cy.url().should("include", "/emergency");
// });

it("can send a message to the connected slack channel", () => {
  cy.visit("http://localhost:3000/write");
  cy.get("textarea").type("hi");
  cy.get("form").submit();
  cy.url().should("include", "/success");
});

// it("can view messages from their slack channel", () => {
//   cy.visit("http://localhost:3000/view-messages");
// });

// it("can send an automated SOS message to their slack channel", () => {
//   cy.visit("http://localhost:3000/emergency");
// });
