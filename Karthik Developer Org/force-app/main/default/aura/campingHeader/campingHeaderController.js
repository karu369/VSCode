({
    clickCreateItem : function(component, event, helper) {
        var validItems = component.find("campingform").reduce(function (validsofar,inputitem){
            inputitem.showHelpMessageIfInvalid();
            return validsofar && inputitem.get("v.validity").valid;
        },true);
        if(validItems)
        {
            var itemsarray = component.get("v.items");
            var newitemobj = JSON.stringify(component.get("v.newitem"));
            itemsarray.push(newitemobj);
            component.set("v.items",itemsarray);
            component.set("v.newitem", {'sobjectType':'Camping_Item__c',
                                        'Name':'',
                                        'Price__c':'0',
                                        'quantity__c':'0',
                                        'packed__c':'true'})
            
            
        }
    }
})