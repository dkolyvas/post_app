const express = require('express')
const router = express.Router()
const {body, param, validationResult} = require('express-validator')

const categoryController = require('../controllers/category.controller')
const idValidator = ()=>{
    return [
        param('id').isNumeric().withMessage("Enter only number")
    ]
}
const nameValidator = ()=>{
    return [
    body('name').not().isEmpty().withMessage("The field name is required"),
    body('name').isString().withMessage("Enter only letters")
    ]
}

const updateValidator = ()=>{
    return[
        body('id').isNumeric().withMessage('id must be numeric'),
        body('id').not().isEmpty().withMessage('you must submit an id'),
        body('name').not().isEmpty().withMessage("The field name is required"),
        body('name').isString().withMessage("Enter only letters")
    ]
}

router.get("/", categoryController.findAll)

router.post('/',nameValidator(), (req, res, next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({status: false, data: errors.array()})
    }
    next()
}, categoryController.create)

router.get("/:id",idValidator(), (req, res, next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({status:false, data: errors.array()})
    }
    next()
}, categoryController.findOne )
router.patch("/", updateValidator, (req, res, next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({status: false, data: errors.array()})
    }


},categoryController.update)
router.delete("/:id",idValidator(), (req, res, next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({status: false, data: errors.array()})
        }
        next()
}, categoryController.delete)






module.exports = router