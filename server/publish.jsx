//This file is used to publist database Collections and its methods to retrive data
Resolutions = new Mongo.Collection("resolutions");

Meteor.publish("allResolutions", function(){
    return Resolutions.find();
});
