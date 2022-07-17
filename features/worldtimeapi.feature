Feature: Location current timezone

  CASE 2 - incorrect input is submitted and asserts response code and regular expressions elements
  /timezone/api/ip/ipv4/ 

  Scenario Outline: User obtains timezone using ipv4 data
    Given Max GET requests <path>
    Then Max validates received results <responseCode> and <responseBody>

    Examples:
      | path        | responseCode  | responseBody            |
      | ip/asdfgh   | 404           | {"error":"malformed ip"}|
      | ip/ipv4     | 404           | {"error":"malformed ip"}|