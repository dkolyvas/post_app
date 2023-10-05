const express = require('express')
const router = express.Router()
const postController = require("../controllers/post.controller")
const {body, param, validationResult}= require('express-validator')

const text_and_title_Validator =()=>{
    return[
        body('title').not().isEmpty().withMessage("you must submit a title"),
        body('title').isString().withMessage('the title must contain letters'),
        body('title').not().isEmpty().withMessage("you must submit a text"),
        body('title').isString().withMessage('the text must contain letters')
    ]
}

router.post("/",text_and_title_Validator, (req, res, next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty){
        return res.status(400).json({status: false, data: errors.array()})
    }
    next()
}, postController.create)
router.get('/', postController.findAll)
router.get('/:id', postController.findOne)
router.patch('/', postController.updatePost )
router.patch('/:id/category', postController.updateCategory)
router.delete("/:id/category", postController.deleteCategories)
router.delete("/:id", postController.deletePost)



module.exports = router