//This file is used to create methods on server side that can be subscribed on client side
//To access users data from database or any other methods which are not to be exposed on client side
Meteor.methods({
    addResolution:function(resolutionText){
        Resolutions.insert({
            text: resolutionText,
            complete: false,
            createdAt: new Date()
        });
    }
});
