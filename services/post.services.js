const PostEntity = require("../model/Post").PostEntity
const datasource = require("../connect").datasource

function create(data){
    const result = datasource
                .getRepository(PostEntity)
                .save(data)
                .catch(error =>console.log("Problem in saving post ", error))
                

                return result
}
function findAll(){
    const result = datasource
                .getRepository(PostEntity)
                .createQueryBuilder('post')
                .leftJoinAndSelect('post.categories', 'category')
                .getMany()
                

    return result;
}


function findOne(id){
    const result = datasource
                .getRepository(PostEntity)
                .createQueryBuilder('post')
                .leftJoinAndSelect('post.categories', 'category')
                .where('post.id = :x', {x :id})
                .getOne()

                return result
}

function update(data){
    const result = datasource
                .getRepository(PostEntity)
                .createQueryBuilder()
                .update(PostEntity)
                .set({
                    title: data.title,
                    text: data.text
                })
                .where("id = :x", {x: data.id})
                .execute()

    return result
}

async function updateCategory(data){
    const actualRelationships =await datasource
                    .getRepository(PostEntity)
                    .createQueryBuilder()
                    .relation(PostEntity, 'categories')
                    .of(data.id)
                    .loadMany()
    const result = await datasource
                    .getRepository(PostEntity)
                    .createQueryBuilder()
                    .relation(PostEntity, 'categories')
                    .of(data.id)
                    .addAndRemove(data.categories, actualRelationships)
                    .catch(error => console.log("Unable to update product categories", error))

   return result                 
}


function deletePost(id){
    const result = datasource
            .getRepository(PostEntity)
            .createQueryBuilder()
            .delete()
            .from(PostEntity)
            .where("id = :x", {x: id})
            .execute()

    return result
}

function deleteCategories(data){
    const result = datasource
                    .getRepository(PostEntity)
                    .createQueryBuilder()
                    .relation(PostEntity, 'categories')
                    .of(data.id)
                    .remove(data.categories)


    return result
}





module.exports = {create, findAll, findOne, update, updateCategory, deletePost, deleteCategories}