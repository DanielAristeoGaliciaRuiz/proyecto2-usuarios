const usersDB=[]
let baseId=1

const findAllUsers=async ()=>{
    return await usersDB
}

const findUserById=async(id)=>{
    const userFilter= await usersDB.find((user)=>user.id===id)
    return userFilter
}

const createNewUser=async(data)=>{
    const newUser={
        id: baseId++,
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        password:data.password,
        age:data.age
    } 

   await usersDB.push(newUser)
    return newUser
}

module.exports={
    findAllUsers,
    findUserById,
    createNewUser
}