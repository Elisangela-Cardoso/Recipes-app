/**
 * Get all meals categories
 * url = https://www.themealdb.com/api/json/v1/1/categories.php
 */
export async function getCategories() {
  try {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await result.json()
    console.log(data)
    return data
  } catch (erro) {
    console.error("Error fetching categories:", erro)
  }
}

getCategories()
/**
 * Get meals by category name
 */
export async function getMealsByCategoryName(name) {

}

/**
 * Get meals details
 */
export async function getMealDetailsById(mealId) {

}


/**
 * Get one or more meals by name (Search meal by name or caracter)
 */
export async function getMealByName(mealName) {

}