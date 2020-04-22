public class Product 
{
    Public List<Product__c> prod  {get; set;}
    
    Public Product()
    {
        prod = new List<Product__c>();
    }
    
    Public List<Product__c> getProductDetails()
    {
        prod =[Select Name,price__c,Model_Name__c,Description__c,Image__c From Product__c];
        return prod;
    }
    
}