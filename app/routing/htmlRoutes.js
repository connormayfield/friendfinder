/* ROUTES */
module.exports = function(app, path) {

    /* RESPONSE FOR GET METHOD (SURVEY) */
    app.get("/survey",function(req,res) {
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });

    /* RESPONSE FOR GET METHOD*/
    app.get("/*",function(req,res) {
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });
};
