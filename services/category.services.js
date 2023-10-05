const CategoryEntity = require("../model/Category").CategoryEntity
const datasource = require('../connect').datasource

function findAll(){
    console.log('running service')
    const result = datasource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select('category')
    .from(CategoryEntity, 'category')
    .getMany();
    console.log(result)

    

    return result
}
function findOne(id){
    const result = datasource
            .getRepository(CategoryEntity)
            .createQueryBuilder()
            .select('ct')
            .from(CategoryEntity, 'ct')
            .where('ct.id = :x', {x:id})
            .getOne()

            return result

}


function create(name){
      
    const result =  datasource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .insert()
        .into(CategoryEntity)
        .values(
           [{name: name}]
        )
        .execute()
        .catch(error =>console.log(error));

        return result
}

function update(data){
    const result = datasource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .update(CategoryEntity)
        .set({name: data.name})
        .where("id = :x", {x: data.id})
        .execute()
        .catch(error => console.log(error))

        return result
}

function deleteCategory(id){
    const result = datasource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .delete()
        .from(CategoryEntity)
        .where("id = :x", {x:id} )
        .execute()
        .catch(error => console.log(error))

    return result
}



module.exports = {create, findAll, findOne, update, deleteCategory}