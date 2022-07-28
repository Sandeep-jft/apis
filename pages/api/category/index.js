import { category } from "../../../data/category"


const getCategory = (req,res)=>{
    console.log('the method is --', req.method);
    try{
        if(req.method === 'GET'){
            console.log('the query params', req.query);
            return res.status(200).json(category)
        } else if(req.method === 'POST'){
            category.push({...req.body, id:category.length+1});
            return res.status(201).json(category)
        } 
    }catch (err) {
        return res.status(400).json({error:err})
    }
    
}

export default getCategory;