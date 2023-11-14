const friend = require('../models/friends_list');
const userdase = require('../models/user');
const express = require('express')
const Router = express.Router();
const friend_req = require('../models/friends_request');

/*Router.get('/friendchecker',async function(req,res){
    console.log("i am here");
  
        let count1 = await userdase.countDocuments({email:req.query.name})
        let count2 = await friend.countDocuments({tag:req.user.username,friend_id:req.query.name})
        let count3 = await friend_req.countDocuments({friend_sender:req.user.username,friend_receiver:req.query.friend})
        let count4 = await friend_req.countDocuments({friend_receiver:req.user.username,friend_sender:req.query.friend});
       const yes1 = {value:'1'};
       const no1 ={value:'0'}
        if(count1 != 0 && count2 == 0 && count3 == 0 && count4 == 0){
              res.json(yes1);
        }
        else
              res.json(no1);


   
});*/

Router.get('/', function(req, res) {
    console.log(req.query.name);

    userdase.countDocuments({ username: req.query.name })
        .then(count1 => {
            return friend.countDocuments({ tag: req.user.username, friend_id: req.query.name })
                .then(count2 => {
                    return friend_req.countDocuments({ friend_sender: req.user.username, friend_reciever: req.query.friend })
                        .then(count3 => {
                            return friend_req.countDocuments({ friend_reciever: req.user.username, friend_sender: req.query.friend })
                                .then(count4 => {
                                    const yes1 = { value: '1' };
                                    const no1 = { value: '0' };
                                    console.log(count1,count2,count3,count4)

                                    if (count1 != 0 && count2 == 0 && count3 == 0 && count4 == 0) {
                                        res.json(yes1);
                                    } else {
                                        res.json(no1);
                                    }
                                })
                        })
                })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


module.exports = Router;