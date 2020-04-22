({
    init: function (component) {
        var allSelected= component.get("v.allSelected");
        var list =[];
        var listOfValues=[];
        var action = component.get("c.getPickListValuesIntoList");
        action.setParams({
            objectType: component.get("v.sObjectName"),
            selectedField: component.get("v.fieldName")
        });
        action.setCallback(this, function(response) {
           var recievedValues = response.getReturnValue();
           //console.log(recievedValues);
            for (var i = 0; i < recievedValues.length; i++) {
  				listOfValues.push(recievedValues[i]);
                var item = {
                    "label": recievedValues[i],
                	"value": recievedValues[i],
                };
                list.push(item);
            }
            component.set("v.options", list);
            if(allSelected==="true"){
                component.set("v.values", listOfValues);
            }else{
                component.set("v.options", list);
            }
            
        })
        $A.enqueueAction(action);

    },
    
    handleChange: function (cmp, event) {
        // This will contain an array of the "value" attribute of the selected options
        var selectedOptionValue = event.getParam("value");
        //component.set("v.selectedvalue",selectedOptionValue);
        alert("Option selected with value: '" + selectedOptionValue.toString() + "'");
    }
})