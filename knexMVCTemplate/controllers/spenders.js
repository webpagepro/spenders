const knex = require('../db/knex.js')

    module.exports = {

    register: (req, res) => {
        knex('spenders')
        .insert({
        spender_name: req.body.reg_name,
        spender_email: req.body.reg_email,
        spender_password: req.body.reg_password
        })
        .then(spender =>  res.json(spender))
    },
 

     login: (req, res) => {
        knex('spenders')
        .where('spender_email', req.body.log_email)
        .then((results) => {
            let signed_user = results[0];
            if(!signed_user){
                res.sendStatus(401);
                return;
            } 
           
            if(signed_user.spender_password == req.body.log_password){
                    res.json(signed_user);
                } 

            }
         
        )}
     

}