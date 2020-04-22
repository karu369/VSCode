public class testopenweather {
    public String city{get; set;}
    public String temp{get; set;}
    public String pressure{get; set;}
    public String humidity{get; set;}
    public String temp_min{get; set;}
    public String temp_max{get; set;}
    
    public testopenweather(ApexPages.StandardController stdController){
        Account acc = new Account();
        //acc = [select id, shippingcity from Account where Id=:acc.Id];
    }

}