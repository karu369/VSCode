({
	Navigate : function(component, event, helper) {
         $A.createComponent(
            "c:C2",
            {
                 
            },
            function(newCmp){
                if (component.isValid()) {
                    var body = component.get("v.body");
                    body.push(newCmp);
                    component.set("v.body", body);
                }
            }
        );	        
		
	}
})