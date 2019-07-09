Feature: SALT Flex API testing
    
    @flex-api-sc001
    ### passing parameters in query string - GET
    Scenario Outline: Verify Flex key API returns a valid public key qs
        Given I create a get request for '/salt/flex/Key' api
        When I add query string to the request
            | key            | value            |
            | key            | <key>            |
            | encryptionType | <encryptionType> |
        And I mock get response for <testDataId>
        And I execute the api
        Then I should get the response with status <statusCode>
        And I verify the public token generated
        Examples:
            | key      | encryptionType | statusCode | testDataId |
            | Travelex | None           | 200        | flex-api-sc001  |