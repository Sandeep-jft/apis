import { category } from "../../../data/category";

const getCategoryById = (req,res)=>{
    try{
        const {id}= req.query;
        if(req.method === 'GET') {
            const data = category.find((e)=>e.id === parseInt(id));
            res.status(200).json(data);
        } else if(req.method === 'DELETE'){
            const deletedCategory = category.find(item=>item.id ===  parseInt(id));
            const deleteCategoryIndex = category.findIndex(item=>item.id ===  parseInt(id));
            category.splice(deleteCategoryIndex,1)
            return res.status(201).json(deletedCategory)
         }
    } catch (err){
        return res.status(400).json({err})
    }
    
}

export default getCategoryById