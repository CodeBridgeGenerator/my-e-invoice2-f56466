const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("currencyCodes service", () => {
  let thisService;
  let currencyCodeCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("currencyCodes");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (currencyCodes)");
  });

  describe("#create", () => {
    const options = {"currencyCode":"new value"};

    beforeEach(async () => {
      currencyCodeCreated = await thisService.create({...options, ...users});
    });

    it("should create a new currencyCode", () => {
      assert.strictEqual(currencyCodeCreated.currencyCode, options.currencyCode);
    });
  });

  describe("#get", () => {
    it("should retrieve a currencyCode by ID", async () => {
      const retrieved = await thisService.findById(currencyCodeCreated._id);
      assert.strictEqual(retrieved._id.toString(), currencyCodeCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"currencyCode":"updated value"};

    it("should update an existing currencyCode ", async () => {
      const currencyCodeUpdated = await thisService.findByIdAndUpdate(
        currencyCodeCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(currencyCodeUpdated.currencyCode, options.currencyCode);
    });
  });

  describe("#delete", () => {
    it("should delete a currencyCode", async () => {
      const currencyCodeDeleted = await thisService.remove(currencyCodeCreated._id);
      assert.strictEqual(currencyCodeDeleted._id.toString(), currencyCodeCreated._id.toString());
    });
  });
});