Feature: Region current timezone

  CASE 1 - returns position 45th and asserts response code and regular expressions elements
  /timezone/area/location/region/

  Rule: Endpoint returns a list with all timezones available

    Scenario: User obtains requested timezone 
      Given Max obtains WorldTimeApi list
      When Max obtains timezone of 45th position
      Then Max confirms response and regular expression elements
