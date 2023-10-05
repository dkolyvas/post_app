const postService = require('../services/post.services')


exports.create = async(req, res)=>{
    const data = req.body
    console.log("Insert post ", data.title)

    try{
        const result = await postService.create(data)
        res.status(200).json({status: true, data: result})
    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Unable to create record")
    }

}


exports.findAll = async(req, res)=>{
    console.log("find all posts")

    try{
        const result = await postService.findAll()
        console.log("retrieving data for posts")
        res.status(200).json({status: true, data: result})

    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Unable to retrieve records")
    }

}

exports.findOne = async(req, res)=>{
    const id = req.params.id
    try{
        const result = await postService.findOne(id)
        console.log("retrieving data for post with id" , id)
        res.status(200).json({status: true, data: result})

    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Unable to retrieve record")
    }

}

exports.updatePost = async(req, res)=>{
    console.log("Updating")
    try{
        const result = await postService.update(req.body)
        console.log("updating post with id" , req.body.id)
        res.status(200).json({status: true, data: result})

    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Unable to update record", err)
    }


}

exports.updateCategory = async(req, res)=>{
    const id = req.params.id
    console.log("UpdatePostCategory")

    try{
        const result = await postService.updateCategory(req.body)
        console.log("updating categories of post with id" , id)
        res.status(200).json({status: true, data: result})

    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Unable to update record", err)
    }
}

exports.deletePost = async(res, req)=>{
    const id = req.params.id
    console.log("deleting post")

    try{
        const result = await postService.deletePost(id)
        console.log("deleting post with id" , id)
        res.status(200).json({status: true, data: result})

    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Unable to delete record", err)
    }
}

exports.deleteCategories = async(req, res)=>{
    console.log("deleting post categories")
    try{
        const result = await postService.deleteCategories(req.data)
        console.log("deleting categories of post with id" , req.data.id)
        res.status(200).json({status: true, data: result})

    }catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Unable to delete records", err)
    }
}