({
    navigate : function(component, event, helper) {
        $A.createComponent(
            "c:component2",
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