const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("countryCodes service", () => {
  let thisService;
  let countryCodeCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("countryCodes");

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
    assert.ok(thisService, "Registered the service (countryCodes)");
  });

  describe("#create", () => {
    const options = {"countryCode":"new value"};

    beforeEach(async () => {
      countryCodeCreated = await thisService.create({...options, ...users});
    });

    it("should create a new countryCode", () => {
      assert.strictEqual(countryCodeCreated.countryCode, options.countryCode);
    });
  });

  describe("#get", () => {
    it("should retrieve a countryCode by ID", async () => {
      const retrieved = await thisService.findById(countryCodeCreated._id);
      assert.strictEqual(retrieved._id.toString(), countryCodeCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"countryCode":"updated value"};

    it("should update an existing countryCode ", async () => {
      const countryCodeUpdated = await thisService.findByIdAndUpdate(
        countryCodeCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(countryCodeUpdated.countryCode, options.countryCode);
    });
  });

  describe("#delete", () => {
    it("should delete a countryCode", async () => {
      const countryCodeDeleted = await thisService.remove(countryCodeCreated._id);
      assert.strictEqual(countryCodeDeleted._id.toString(), countryCodeCreated._id.toString());
    });
  });
});