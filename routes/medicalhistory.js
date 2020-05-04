const express = require("express");
const AWSreturn = express.Router();
const cors = require("cors");
var AWS = require("aws-sdk");

var AWSConfigObj = require('./awsConfig.json')

AWSreturn.use(cors());

let awsConfig = {
    region: AWSConfigObj.config.region,
    endpoint: AWSConfigObj.config.endpoint,
    accessKeyId: AWSConfigObj.config.accessKeyId,
    secretAccessKey: AWSConfigObj.config.secretAccessKey
};
AWS.config.update(awsConfig);
var docClient = new AWS.DynamoDB.DocumentClient();
//var dynamodb= new AWS.DynamoDB();
var dynamodb = new AWS.DynamoDB({apiVersion:'2012-08-10'});

AWSreturn.get("/", (req, res) => {
//console.log('in route');
    var params = {
        TableName : "MedicoConnect",
        KeyConditionExpression: "PatientID = :p",
        ExpressionAttributeValues: {
            ":p": req.query.PatientID
        }
        
    };
    //console.log('hi params ',params);

    docClient.query(params, function(err, data) {
        if(data){
            res.send(data.Items);
        }
        else{
            res.send('error');
        }
})
});

AWSreturn.get("/deletefilemedico", (req, res) => {
    //console.log('in route');
        var params = {
      Key: {
       "PatientID": {
         S: req.query.PatientID
        },
        "Filename":{
            S: req.query.Filename
        }
      }, 
      TableName: "MedicoConnect"
     };
        //console.log('hi params ',params);
    
        dynamodb.deleteItem(params, function(err, data) {
    
            if(data){
                res.send(data.Items);
            }
            else{
                res.send('error');
            }
    })
    });

module.exports = AWSreturn;