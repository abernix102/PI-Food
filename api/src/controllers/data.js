require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Recipe, Diet } = require('../db');

//obtencion de recetas desde la api
const allDataApi = async() => {
    try{
        const apiUrl = await axios.get(`http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`);
        const apiInfo = apiUrl.data.results.map(element => {
            return {
                id: element.id,
                name: element.title,
                image: element.image,
                summary: element.summary,
                spoonacularScore: element.spoonacularScore,
                healthScore: element.healthScore,
                diets: element.diets.map(each => ({ name: each })),
                dishTypes: element.dishTypes, 
                steps: element.analyzedInstructions[0]?.steps.map(each => { return {number:each.number, step: each.step}})
            }
        })
        return apiInfo
    }catch(error){
       console.error(error)
    }
}


const getBdID = async(id) => {
    return await Recipe.findByPk(id, {
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: []
              }
        }
    })
}

const getApiID = async (id) =>{
    const apiID = await axios.get(`http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`)
    const datas = apiID.data;
    const details = {
        id: datas.id,
        name: datas.title,
        image: datas.image,
        summary: datas.summary,
        score: datas.spoonacularScore,
        healthScore: datas.healthScore,
        steps: datas.analyzedInstructions[0]?.steps.map(spet => {
            return {
                number: spet.number,
                step: spet.step,
            }
        }),
        dish: datas.dishTypes,
        diets: datas.diets,
    }
    return details;
}

const getDataBase = async () => {
    return await Recipe.findAll({
      include: [
        {
          model: Diet,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
    });
  };


  const getAll = async () => {
    try {
      const dataApiPromise = allDataApi();
      const dataPromise = getDataBase();
      const [dataApi, data] = await Promise.all([dataApiPromise, dataPromise]);
      const all = dataApi.concat(data);
      return all;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

module.exports = {
    allDataApi,
    getAll,
    getDataBase,
    getApiID,
    getBdID
}