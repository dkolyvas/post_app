const { CategoryEntity } = require('../model/Category')
const categoryService = require('../services/category.services')

exports.findAll = async(req, res)=>{
    console.log('find all categories')

    try{
        const result =await categoryService.findAll()
        res.status(200).json({status: true, data: result})

    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem retrieving categories")
    }
}

exports.create = async(req, res)=>{
    console.log('Insert new category name')
    const name = req.body.name
    try{
        const result =await categoryService.create(name)
        res.status(200).json({status: true, data: result})

    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem saving category")
    }
}

exports.findOne = async(req, res)=>{
    const id = req.params.id
    console.log('Find category with specific id ', id)
    try{
        const result = await categoryService.findOne(id)
        console.log('success retrieving category')
        res.status(200).json({status: true, data: result})
    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem finding  category")
    }

    
}

exports.update = async(req, res)=>{
    const id = req.body.id
    console.log("updating category with id ", id)
    try{
        const result = await categoryService.update(req.body)
        res.status(200).json({status: true, data: result})
        console.log("success updating")
    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem updating  category with id ", id)
    }
}

exports.delete = async(req, res)=>{
    const id = req.params.id
    console.log("Delete category with id ", id)
    try{
        const result = await categoryService.deleteCategory(id)
        res.status(200).json({status: true, data: result})
        console.log("success deleting")
    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem deleting  category with id ", id)
    }
}