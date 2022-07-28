 const handleAllRoutes = (req,res)=>{
    const params = req.query.params;
    console.log('Params --', params);
    res.status(200).json(params);
}

export default handleAllRoutes;