/* GETTING DATA */
var friendArray=require("../data/friends.js");

/* ROUTE FOR /FRIENDS */
module.exports = function(app) {


    app.get("/api/friends",function(req,res) {
        res.json(friendArray);
    });

    /* POST METHOD RESPONSE */
    app.post("/api/friends",function(req,res) {
        var newFriend=req.body;
        newFriend.scores=newFriend.scores.map(score=>parseInt(score));
        var matchFriend;
        var match;
        var totalDifference=0;
        /* FIND MATCH */
        for(var i=0;i<friendArray.length;i++) {
            for(var j=0;j<friendArray[i].scores.length;j++) {
                totalDifference=totalDifference+Math.abs(friendArray[i].scores[j]-newFriend.scores[j]);
            }
            if(match==undefined || totalDifference<match) {
                match=totalDifference;
                matchFriend=friendArray[i];
            }
            totalDifference=0;
        }
        friendArray.push(newFriend);
        res.json(matchFriend);
    });
};
