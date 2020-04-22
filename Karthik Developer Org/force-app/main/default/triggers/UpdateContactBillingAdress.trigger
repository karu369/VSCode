trigger UpdateContactBillingAdress on Account (before insert, after update) {
    List<Contact> updatedContacts = new List<Contact>();
    List<Contact> listOfCOntacts = [SELECT Id,Name,AssistantName,AccountId FROM Contact WHERE AccountId IN :Trigger.newMap.keySet()]; 
    //listOfCOntacts = 
    
    for(Contact c : listOfCOntacts){
        //Account acc = ;
        c.AssistantName = Trigger.newMap.get(c.AccountId).billingStreet;
        updatedContacts.add(c);
    }
    update updatedContacts;
}