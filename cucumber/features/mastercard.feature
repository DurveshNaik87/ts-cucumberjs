Feature: Mastercard login API testing

    @mastercard-api-sc001
    ###passing json object from external file - POST
    Scenario Outline: Verify mastercard login post API
        Given I create a post request for '/cards/user/login' api
        When I add query string to the request
            | key | value |
            | key | <key> |
        When I add parameters to request with <testDataId> test data
        And I mock post response for <testDataId>
        And I execute the api
        Then I should get the response with status <statusCode>
        And I verify the results retrieved
        Examples:
            | key      | statusCode | testDataId           |
            | Travelex | 200        | mastercard-api-sc001 |