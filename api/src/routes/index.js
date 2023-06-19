const { Router } = require('express');
const {getDiets, getDB}  = require ('../controllers/diets.js')
const {getRecipe, getIDRecipe, postRecipe, getRecipesAll} = require ('../controllers/recipe')
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/diet', async (req, res) => {
    await getDB(req, res);
  });

router.get('/recipe', async (req, res) =>{
    await getRecipesAll(req, res)
})
router.get('/recipes', async (req, res) =>{
    await getRecipe(req, res)
})

router.get('/recipes/:id', async (req, res)=> {
    await getIDRecipe(req, res)
})

router.post('/recipes' , async (req, res) => {
    await postRecipe(req, res)
})
module.exports = router;
