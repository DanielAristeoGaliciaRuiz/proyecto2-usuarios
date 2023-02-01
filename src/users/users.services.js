const usersControllers=require('./users.controllers.js')

const getAllUsers=(req,res)=>{
    usersControllers.findAllUsers()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
}

const getUserById=(req,res)=>{
    const id=Number(req.params.id)

    usersControllers.findUserById(id)
    .then(data=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400).json({message:'Invalid Id'})
        }
       
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}

const postUser=(req,res)=>{
    const userObj=req.body
    usersControllers.createNewUser(userObj)
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
}

module.exports={
    getAllUsers,
    getUserById,
    postUser
}