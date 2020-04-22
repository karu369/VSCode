public class ContactDisplay {
 public ApexPages.StandardSetController controller{set; get;}   
    public id contactId              {get; set;}
    public Contact newContactVar     {get; set;}
    public boolean flag              {get; set;}
    public boolean showSingleContact {get; set;}
    public boolean ContactList       {get; set;}
    public boolean EditEnable        {get; set;}
    public Contact SingleContact     {get; set;}
    List<Contact> cons;
    
    public List<Contact> getContact()
    {
        cons = (List<Contact>) controller.getRecords();
        return cons;
    }
    
    public void Commonfunction()
    {
        cons = [select name from Contact order by CreatedDate desc ];
        controller = new ApexPages.StandardSetController(cons);
        controller.setPageSize(10);
    }
    
    public ContactDisplay()
    {
        Commonfunction();
        flag = false;
        ContactList = true;
        newContactVar = new Contact();
        EditEnable = false;
    }
    
    public void newContact()
    {
        flag = true;
    }
    
    public void save()
    {
        insert newContactVar;
        newContactVar.Id = null;
        Commonfunction();
        flag = false;
    }
    
    public void getSingleContact()
    {
        showSingleContact = true;
        ContactList = false;
        flag = false;
        SingleContact = [select id,LastName,FirstName,Email,MobilePhone,LeadSource from contact Where id=:contactId];
    }
    
    public void EditEnableFunction()
    {
        EditEnable = true;
    }
    
    public void UpdateFunction()
    {
        update SingleContact;
        EditEnable = false;
    }
    
    public void MainPage()
    {
        showSingleContact = false;
        ContactList = true;
        EditEnable = false;
        Commonfunction();
        getContact();
    }
    
    public void clearValues(){
        newContactVar.LeadSource = null;
    }
    
    
}