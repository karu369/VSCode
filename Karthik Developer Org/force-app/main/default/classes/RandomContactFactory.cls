public class RandomContactFactory {
    
    public static List<Contact> generateRandomContacts(Integer noOfContacts, String LastName){
        
        List<Contact> newContactList = new List<Contact>();
        for(Integer i=0; i<noOfContacts ; i++){
            contact newContact = new contact();
            newContact.FirstName='Test'+i;
            newContact.LastName=LastName;
            newContactList.add(newCOntact);
        }
        
        return newContactList;
    }

}