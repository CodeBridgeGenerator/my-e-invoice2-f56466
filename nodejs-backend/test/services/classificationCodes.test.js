const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("classificationCodes service", () => {
  let thisService;
  let classificationCodeCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("classificationCodes");

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
    assert.ok(thisService, "Registered the service (classificationCodes)");
  });

  describe("#create", () => {
    const options = {"classificationCode":"new value"};

    beforeEach(async () => {
      classificationCodeCreated = await thisService.create({...options, ...users});
    });

    it("should create a new classificationCode", () => {
      assert.strictEqual(classificationCodeCreated.classificationCode, options.classificationCode);
    });
  });

  describe("#get", () => {
    it("should retrieve a classificationCode by ID", async () => {
      const retrieved = await thisService.findById(classificationCodeCreated._id);
      assert.strictEqual(retrieved._id.toString(), classificationCodeCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"classificationCode":"updated value"};

    it("should update an existing classificationCode ", async () => {
      const classificationCodeUpdated = await thisService.findByIdAndUpdate(
        classificationCodeCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(classificationCodeUpdated.classificationCode, options.classificationCode);
    });
  });

  describe("#delete", () => {
    it("should delete a classificationCode", async () => {
      const classificationCodeDeleted = await thisService.remove(classificationCodeCreated._id);
      assert.strictEqual(classificationCodeDeleted._id.toString(), classificationCodeCreated._id.toString());
    });
  });
});