import UserModel from "../models/UserModel.js"

export const createUser = async(req, res) => {
    try {
        await UserModel.create(req.body)
        res.json({
            "message" : "Usuario creado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}