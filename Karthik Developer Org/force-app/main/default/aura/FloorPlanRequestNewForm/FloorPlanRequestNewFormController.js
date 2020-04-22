({
    doInit: function(component, event, helper) {
        // Prepare a new record from template
        alert('hello');
        component.find("FPRRecordCreator").getNewRecord(
            "Floor_Plan_Request__c", // sObject type (entityAPIName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newFPR");
                var error = component.get("v.newFPRError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    console.log("Record template initialized: " + rec.sobjectType);
                }
            })
        );
    },
    
    addRow : function(component,event,helper){
        
    },
    
    informationSection : function(component, event, helper) {
       helper.helperFun(component,event,'articleOne');
    },
    
 layoutInformationSection : function(component, event, helper) {
    helper.helperFun(component,event,'articleTwo');
},
    drafterTimeLogSection : function(component, event, helper) {
    helper.helperFun(component,event,'articleThree');
},
    fireMarshalingSection : function(component, event, helper) {
    helper.helperFun(component,event,'articleFour');
},
    electricalDownloadSection : function(component, event, helper) {
    helper.helperFun(component,event,'articleFive');
},
    handleSaveRecord: function(component, event, helper) {
        component.set("v.newFPR.Id", component.get("v.recordId"));
        if(component.find("FPR_Multiselect") != null){
            var selectedValues = component.find("FPR_Multiselect").get("v.values");
            //var singleSelectedValues = component.find("singlePickList").get("v.value");
            //alert(singleSelectedValues);
            //alert(component.get("v.FPRFields.Contract_Status__c"));
            var databaseMultiselect = [];
            for(var i=0;i<selectedValues.length;i++){
                databaseMultiselect += selectedValues[i]+';';
            }
            console.log(databaseMultiselect);
            component.set("v.FPRFields.Plan_Type_Multi_Select__c",databaseMultiselect);
        }
        component.find("FPRRecordCreator").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // record is saved successfully
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was saved."
                });
                resultsToast.fire();
                var homeEvt = $A.get("e.force:navigateToObjectHome");
                homeEvt.setParams({
                    "scope": "Floor_Plan_Request__c"
                });
                homeEvt.fire();
            } else if (saveResult.state === "INCOMPLETE") {
                // handle the incomplete state
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                // handle the error state
                console.log('Problem saving contact, error: ' + 
                            JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });
        
    },
        cancelDialog : function(component, helper) {
            var homeEvt = $A.get("e.force:navigateToObjectHome");
            homeEvt.setParams({
                "scope": "Floor_Plan_Request__c"
            });
            homeEvt.fire();
        }
})