import { Schema, model } from 'mongoose'


const MenuItemSchema = new Schema({
  category : {type: String, required: true},
  name: {type: String, required: true},
  psrc: {type: String, default: "/404.png"},
  pdesc: String,
  src: {type: String, default: "/404.png"},
  desc: String,
  cals: String,
  price: Number,
  notes: [{type: String}]
}, {
  collection: 'menuitems'
})

export const MenuItem = model('MenuItem', MenuItemSchema)
  
