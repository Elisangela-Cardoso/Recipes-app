import { getCategories, getMealsByCategoryName, getMealDetailsById } from './api.js'
import { createCategoryCard, categoryIcons } from './category-card.js'
import { createMealCard } from './meal-card.js'
import { createMealModal } from './meal-modal.js'

async function loadCategories() { 
    try {
        const categories = await getCategories()
        
    } catch (error) {
        
    }
}

async function loadMealsByCategoryName(mealCategory) { }

async function loadMealDetailsById(mealId) { }

loadCategories()
loadMealsByCategoryName('Beef')