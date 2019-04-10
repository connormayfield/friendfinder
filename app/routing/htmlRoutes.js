/* route for "/survey" and other urls */
module.exports = function(app, path) {

    /* response for get method of /survey */
    app.get("/survey",function(req,res) {
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });

    /* response for get method of the other url */
    app.get("/*",function(req,res) {
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });
};
