const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("phoneNumberPrefix service", () => {
  let thisService;
  let phoneNumberPrefixCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("phoneNumberPrefix");

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
    assert.ok(thisService, "Registered the service (phoneNumberPrefix)");
  });

  describe("#create", () => {
    const options = {"phoneNumberPrefix":"new value"};

    beforeEach(async () => {
      phoneNumberPrefixCreated = await thisService.create({...options, ...users});
    });

    it("should create a new phoneNumberPrefix", () => {
      assert.strictEqual(phoneNumberPrefixCreated.phoneNumberPrefix, options.phoneNumberPrefix);
    });
  });

  describe("#get", () => {
    it("should retrieve a phoneNumberPrefix by ID", async () => {
      const retrieved = await thisService.findById(phoneNumberPrefixCreated._id);
      assert.strictEqual(retrieved._id.toString(), phoneNumberPrefixCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"phoneNumberPrefix":"updated value"};

    it("should update an existing phoneNumberPrefix ", async () => {
      const phoneNumberPrefixUpdated = await thisService.findByIdAndUpdate(
        phoneNumberPrefixCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(phoneNumberPrefixUpdated.phoneNumberPrefix, options.phoneNumberPrefix);
    });
  });

  describe("#delete", () => {
    it("should delete a phoneNumberPrefix", async () => {
      const phoneNumberPrefixDeleted = await thisService.remove(phoneNumberPrefixCreated._id);
      assert.strictEqual(phoneNumberPrefixDeleted._id.toString(), phoneNumberPrefixCreated._id.toString());
    });
  });
});