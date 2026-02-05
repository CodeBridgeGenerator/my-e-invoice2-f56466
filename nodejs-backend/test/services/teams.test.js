const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("teams service", () => {
  let thisService;
  let teamCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("teams");

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
    assert.ok(thisService, "Registered the service (teams)");
  });

  describe("#create", () => {
    const options = {"name":"new value","users":"aasdfasdfasdfadsfadfa"};

    beforeEach(async () => {
      teamCreated = await thisService.create({...options, ...users});
    });

    it("should create a new team", () => {
      assert.strictEqual(teamCreated.name, options.name);
assert.strictEqual(teamCreated.users, options.users);
    });
  });

  describe("#get", () => {
    it("should retrieve a team by ID", async () => {
      const retrieved = await thisService.findById(teamCreated._id);
      assert.strictEqual(retrieved._id.toString(), teamCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"name":"updated value","users":"345345345345345345345"};

    it("should update an existing team ", async () => {
      const teamUpdated = await thisService.findByIdAndUpdate(
        teamCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(teamUpdated.name, options.name);
assert.strictEqual(teamUpdated.users, options.users);
    });
  });

  describe("#delete", () => {
    it("should delete a team", async () => {
      const teamDeleted = await thisService.remove(teamCreated._id);
      assert.strictEqual(teamDeleted._id.toString(), teamCreated._id.toString());
    });
  });
});