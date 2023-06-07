const axios = require('axios');
const {Diet} = require('../db.js');
require('dotenv').config();
const {API_KEY} = process.env;


const getDiets = async (req, res) => {
    try{
        const info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=60&addRecipeInformation=true`)
        const mapeoDiet = info.data?.results.map(dit => dit.diets)
        const plenear = mapeoDiet.flat();
        const plenearSinRepetidos = [...new Set(plenear)];
        const dietasCreadas = await Diet.bulkCreate(
            plenearSinRepetidos.map((dieta) => ({ name: dieta }))
          );
        res.status(200).json('se creo exitosamente')
    }catch(error){
        res.status(500).json({ error: 'Ha ocurrido un error al obtener las dietas' });
    }
}


const getDB = async (req, res) => {
    try{
        const diets = await Diet.findAll({
            attributes: ['name'],
          });
        res.status(200).json(diets);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}



module.exports = {
    getDiets,
    getDB
}