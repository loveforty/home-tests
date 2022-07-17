const { click } = require('@wdio/cli')
 

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage {
  /**
   * define selectors using getter methods
   */
  get inputSearch() {
    return $('[name="q"]');
  }

  get luckyButton() {
    return $('[name="btnI"]');
  }
  
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async search(keyword) {
    await this.inputSearch.setValue(keyword);
    await this.luckyButton.click();
  }

}


module.exports = new SearchPage();
