var Menu=require('../models/menu');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/menus')
    .get(function(req,res){
       Menu.find({}).exec(function(err,menus){
           if(err)
                res.send(err);
           res.send(menus);
       });
    })

    .post(function(req,res){
        var menu=new Menu(req.body);
        menu.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Menu Added'});
        });
    });

router.route('/menus/:id')
    .put(function(req,res){
        Menu.findOne({_id:req.params.id},function(err,menu){

            if(err)
                res.send(err);

           for(prop in req.body){
                menu[prop]=req.body[prop];
           }

            // save the movie
            menu.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'menu updated!' });
            });

        });
    })

    .get(function(req,res){
        Menu.findOne({_id:req.params.id},function(err, menu) {
            if(err)
                res.send(err);
console.log("get menu block");
            res.json(menu);
        });
    })

    .delete(function(req,res){
        Menu.remove({
            _id: req.params.id
        }, function(err, menu) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;
