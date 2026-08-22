import { MenuItem } from '../model/MenuItem'

export default defineEventHandler(async (event) => {
  try {
    const menuitems = await MenuItem.find().sort({category: 1})
    return menuitems
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to grab menu items from database"
    })
  }
})
