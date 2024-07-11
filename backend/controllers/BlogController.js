import BlogModel from "../models/BlogModel"

export const getAllBlogs = async(req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getBlog = async(req, res) => {
    try {
        const blog = await BlogModel.findAll({where: {id:req.params.id}})
        res.json(blog)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createBlog = async(req, res) => {
    try {
        await BlogModel.create(req, body)
        res.json({
            "message" : "Registro Creado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateBlog = async(req, res) => {
    try {
        await BlogModel.update(req, body, {
            where: { id: req.params.id }
        })
        res.json({
            "message" : "Registro Actualizado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteBlog = async(req, res) => {
    try {
        await BlogModel.destroy(req, body, {
            where:{ id: req.params.id }
        })
        res.json({
            "message" : "Registro Borrado"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}