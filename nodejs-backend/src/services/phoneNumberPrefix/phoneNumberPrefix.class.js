const { Service } = require("feathers-mongoose");
const FindService = require("../../utils/abstracts/FindService");
const MixedService = FindService(Service);

exports.PhoneNumberPrefix = class PhoneNumberPrefix extends MixedService {
  
};