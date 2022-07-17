Feature: Google's Feeling Lucky

  Scenario Outline: As a user, I am redirected to most relevant result CASE 3

    Given Max goes to Google
    When  Max types <keyword> in search box, clicking 'I'm Feeling Lucky' button
    Then Max is taken to <url> of <title>

    Examples:
      | keyword       | url                             | title       |
      | devsavant     | https://devsavant.ai/es/inicio/ | DEVSAVANT   |
      | webdriverio   | https://webdriver.io/           | WebdriverIO |