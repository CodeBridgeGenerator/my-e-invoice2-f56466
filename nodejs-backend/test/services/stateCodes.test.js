const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("stateCodes service", () => {
  let thisService;
  let stateCodeCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("stateCodes");

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
    assert.ok(thisService, "Registered the service (stateCodes)");
  });

  describe("#create", () => {
    const options = {"stateCode":"new value"};

    beforeEach(async () => {
      stateCodeCreated = await thisService.create({...options, ...users});
    });

    it("should create a new stateCode", () => {
      assert.strictEqual(stateCodeCreated.stateCode, options.stateCode);
    });
  });

  describe("#get", () => {
    it("should retrieve a stateCode by ID", async () => {
      const retrieved = await thisService.findById(stateCodeCreated._id);
      assert.strictEqual(retrieved._id.toString(), stateCodeCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"stateCode":"updated value"};

    it("should update an existing stateCode ", async () => {
      const stateCodeUpdated = await thisService.findByIdAndUpdate(
        stateCodeCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(stateCodeUpdated.stateCode, options.stateCode);
    });
  });

  describe("#delete", () => {
    it("should delete a stateCode", async () => {
      const stateCodeDeleted = await thisService.remove(stateCodeCreated._id);
      assert.strictEqual(stateCodeDeleted._id.toString(), stateCodeCreated._id.toString());
    });
  });
});