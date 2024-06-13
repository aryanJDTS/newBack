const express= require('express');
const router= express.Router();
const Lead= require('./leadSchema');

router.post('/',async(req,res)=>{
    const { name, email, phone, answerOne, answerTwo, answerThree ,answerFour } = req.body;

        try {
            const leadData= await Lead.create({
                name:name,
                email:email,
                phone:phone,
                answers:{
                    answerOne,
                    answerTwo,
                    answerThree,
                    answerFour
                }
            });
            res.status(200).json({"message":"data set successfully"})
        } catch (error) {
            console.log(error)
            res.status(500).json({"messagae":"internal server error occured"})
        }
    
});
module.exports=router;