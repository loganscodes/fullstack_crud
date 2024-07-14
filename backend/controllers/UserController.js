import UserModel from "../models/UserModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const createUser = async(req, res) => {

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await UserModel.create({ name, email, password: hashedPassword })
        res.json({
            "message" : "Usuario creado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ where: {email} })

        if(!user){
            return res.status(401).json({ message: 'Credenciales Invalidas'})
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword){
            return res.status(401).json({ message: 'Credenciales Invalidas' })
        }

        const token = jwt.sing({ id: user.id, name: user.name, email: user.email}, 'token', {
            expiresIn: '1h'
        })
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
    }
}