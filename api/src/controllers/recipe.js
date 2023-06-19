const {Recipe} = require("../db");
const {getAll} = require('./data.js')


const getRecipesAll  = async (req, res) => {
  try{
    const recipes = await getAll();
    res.status(200).json(recipes)
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}


const getRecipe = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name || name.length < 4) {
      throw new Error('El valor debe tener al menos 4 caracteres');
    }
    const recipesAll = await getAll();
    const filteredRecipes = recipesAll.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
    if (filteredRecipes.length === 0) {
      return res.status(404).json({ error: 'Name not found' });
    }
    return res.status(200).json(filteredRecipes);
  } catch (error) {
    if (error.message === 'El valor debe tener al menos 4 caracteres') {
      return res.status(400).json({ error: error.message });
    }
    return res.status(200).json([]);
  }
};




const postRecipe = async (req, res) => {
    try{
        const {title, summary, spoonacularScore, healthScore, steps, image, diets} = req.body;
        const allRecipe = await getAll();
        const verification  = allRecipe.find(element => element.title === title)
        if(verification){
            throw new Error('receta ya existente')
        }
        const recipeCreate = await Recipe.create({
            title,
            summary,
            spoonacularScore,
            healthScore,
            steps,
            image
        })
        const dietasPromis = diets.map(diet => recipeCreate.addDiet(diet));
        await Promise.all(dietasPromis)
        res.status(200).send(dietasPromis);
    }catch(error){
        res.status(500).send({error: error.message})
    }
}

const getIDRecipe = async(req, res) =>{
    try{
        const { id } = req.params;
        const recipientes = await getAll();
        const idRecipe = recipientes.find(element => element.id === parseInt(id))
        if (idRecipe) {
            res.status(200).send(idRecipe); 
          } else {
            res.status(404).send({ error: 'No se encontró la receta' });
          }
    }catch(error){
        res.status(500).send    ({ error: 'Ha ocurrido un error al obtener la receta' });
    }
}

module.exports = {
    getRecipe,
    postRecipe,
    getIDRecipe,
    getRecipesAll
}