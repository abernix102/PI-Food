const axios = require('axios');
const {Diet} = require('../db.js');
require('dotenv').config();
const {API_KEY} = process.env;


(async () => {
    try {
      const {data} = await axios.get(
        `http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`
      );
  
      const mapeoDiet = data?.results.map((dit) => dit.diets);
      const plenear = mapeoDiet.flat();
      const plenearSinRepetidos = [...new Set(plenear)];
  
      const dietasCreadas = await Diet.bulkCreate(
        plenearSinRepetidos.map((dieta) => ({ name: dieta }))
      );
  
      console.log('Las dietas se crearon exitosamente');
    } catch (error) {
      console.error('Ha ocurrido un error al obtener las dietas:', error);
    }
})();
// const createDiet = async () => {
//   try {
//     const newDiet = {
//       name: 'Keto Diet'
//     };
//     const createdDiet = await Diet.create(newDiet);
//     console.log('La dieta se creó exitosamente:', createdDiet.toJSON());
//   } catch (error) {
//     console.error('Ha ocurrido un error al crear la dieta:', error);
//   }
// };

// createDiet();

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
    getDB
}