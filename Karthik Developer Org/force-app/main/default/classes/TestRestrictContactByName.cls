@isTest
public class TestRestrictContactByName {
    @isTest static void TestRestrictContactByName() {
        // Test data setup
        // Create an account with an opportunity, and then try to delete it
        Contact cont = new Contact(FirstName='Karthik',
                                   LastName='INVALIDNAME');
        insert cont;
        
        // Perform test
        Test.startTest();
        Database.SaveResult result = Database.Insert(cont, false);
        Test.stopTest();
        // Verify 
        // In this case the deletion should have been stopped by the trigger,
        // so verify that we got back an error.
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
        System.assertEquals('The Last Name "'+cont.LastName+'" is not allowed for DML',
                             result.getErrors()[0].getMessage());
    }
}