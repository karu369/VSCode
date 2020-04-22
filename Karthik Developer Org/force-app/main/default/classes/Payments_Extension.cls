public class Payments_Extension {

    public payment__c thisPayment{get; set;}
    public Statement__c thisStatement{get; set;}
    public Map<Id,String> recordTypeMap{get; set;}
    public boolean success {get; set;}
    
    
}