
const Users = require('../models/User')

// URL Parameters are parameters whose values are set dynamically in a page's URL. They are part of the URL route that is being called by the client.

exports.findAllUsers = async(req, res) => {
    try{
        const data = await Users.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send('could not get Users')
    }
};
exports.findOne = async(req, res) => {
    const {id} = (req.params)
    console.log(id)
    try{
        const data = await Users.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send('could not get User')
    }
};
exports.addUsers = async(req, res) => {
    const {name} = req.body
    try{
        const newUser = new Users(req.body)
        const isFound = await Users.findOne({name})
        if (isFound) {return res.status(400).send(`${Name} is already there.`)}

        await newUser.save()

        res.status(200).send({msg:'User added', newUser})
    } catch (error) {
        res.status(500).send('could not add User')
    }
};
exports.editUsers = async(req, res) => {
    const {id}= req.params
    try {
        const updated= await Users.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({msg:'User updated', updated})
    } catch (error) {
        res.status(500).send(`could not update ${id}`)
    }
}
exports.deleteUsers = async(req, res) => {
    const {id} = req.params
    try{
        const deleted = await Users.findByIdAndDelete(id)
        res.status(200).send({msg:'User deleted', deleted})
    } catch (error) {
        res.status(500).send('could not delete User')
    }
};