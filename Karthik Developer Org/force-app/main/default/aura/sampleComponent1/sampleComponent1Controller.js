({
	handleClick : function(component, event, helper) {
		var source = event.getSource();
        var msg = source.get("v.label");
        component.set("v.message",msg);
	}
})