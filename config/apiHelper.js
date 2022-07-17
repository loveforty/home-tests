const BASE_URI = 'http://worldtimeapi.org/api/';
const request = require('supertest');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class timeHelper {
  async getTimeRequest(path) {
    const res = await request(BASE_URI).get(path);
    return res;
  }
  async getCityRequest(positionValue) {
    const res = await request(BASE_URI).get('timezone/' + positionValue);
    return res;
  }
  async getRegionRequest() {
    const path = 'timezone/America';
    const res = await request(BASE_URI).get(path);
    return res;
  }
}

module.exports = new timeHelper();
