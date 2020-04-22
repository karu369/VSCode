({
    doInit: function(component, event, helper) {
        var fieldInfo = component.get("v.fieldName"); 
        helper.fetchPickListVal(component, fieldInfo, 'picklistView');
    },
    onPicklistChange : function(component, event, helper){
        var selectedPicklist = component.find("picklistView").get("v.value");
        if(selectedPicklist=="Las Vegas"){
            component.set("v.showFields",true);
        }
        else{
            component.set("v.showFields",false);
        }
        if(selectedPicklist=="Yes"){
            component.set("v.requiredFields",true);
        }
        else{
            component.set("v.requiredFields",false);
        }
        
        component.set("v.picklistValue",selectedPicklist);
    }
})