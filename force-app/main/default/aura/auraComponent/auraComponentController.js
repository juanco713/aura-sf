({
    receiveLWCData : function(component, event, helper) {
        component.set("v.dataReceived", event.getParam("dataToSend"));
    },


    passDataToLWC: function(component,event,helper) {
        const stringToSend = component.find("dataToPass").get("v.value");
        const lwcComponent = component.find("lwcComp");
        
        lwcComponent.receiveData(stringToSend);
    }
})