'use strict';

module.exports = class {

  get(id) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getAll(){
      throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  deleteHero(id) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  updateHero(id) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
}