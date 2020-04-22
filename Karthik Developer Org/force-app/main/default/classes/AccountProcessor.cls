public class AccountProcessor {
    
    @future
    public static void countContacts(List<Id> accountIds){
      // List<Account> updateAccountList = new List<Account>([SELECT id,Number_of_Contacts__c,(SELECT Id FROM Contacts) FROM Account WHERE Id IN : accountIds]);
        
    }

}