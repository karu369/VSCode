({
    doInit : function(component, event, helper) {
        component.find("newAccountForm").getNewRecord("Account",null,false,
                                                      $A.getCallback(function(){
                                                          var newrecord = component.get("v.newAccount");
                                                          var error = component.get("v.newAccountError");
                                                          if(error || (newrecord === null))
                                                          {
                                                              console.log("Error Initializing record template:" + error);
                                                              return;
                                                          }
                                                          console.log("Record Template Initialized:" + newrecord.sobjectType);
                                                      })
                                                     );
    },
    
    
    saveAccount : function(component, event, helper) {
    	
    
  }
 })