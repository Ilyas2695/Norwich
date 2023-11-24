import React, { useState } from 'react';

const problemList ={
    "sugar":["ibs"],
    "apple":["ibs"],
    "mango":["ibs"],
    "custard apple (cherimoya)":["ibs"],
    "grapefruit":["ibs"],
    "apricot":["ibs"],
    "blackberry":["ibs"],
    "cherry":["ibs"],
    "nectarine":["ibs"],
    "pear":["ibs"],
    "plum":["ibs"],
    "watermelon":["ibs"],
    "artichoke":["ibs"],
    "cabbage":["ibs"],
    "asparagus":["ibs"],
    "cauliflower":["ibs"],
    "garlic":["ibs"],
    "mushroom":["ibs"],
    "onion":["ibs"],
    "shallot":["ibs"],
    "bitter gourd":["ibs"],
    "bitter melon":["ibs"],
    "peas":["ibs"],
    "snow pea":["ibs"],
    "green pea":["ibs"],
    "snap pea":["ibs"],
    "sweetcorn":["ibs"],
    "lentil":["ibs"],
    "bean":["ibs"],
    "mung bean":["ibs"],
    "kidney bean":["ibs"],
    "soybean":["ibs"],
    "chickpea":["ibs"],
    "split pea":["ibs"],
    "milk":["ibs"],
    "goat's milk":["ibs"],
    "yoghurt":["ibs"],
    "kefir":["ibs"],
    "condensed milk":["ibs"],
    "wheat":["ibs"],
    "barley":["ibs"],
    "rye":["ibs"],
    "triticale":["ibs"],
    "honey":["ibs"],
    "high fructose corn syrup":["ibs"],
    "sorbitol":["ibs"],
    "maltitol":["ibs"],
    "xylitol":["ibs"],
    "aspartame":["ibs"],
    "sucralose":["ibs"],
    "acesulfame":["ibs"],
    "saccharin":["ibs"],
    "spam":["ibs"],
    "chips":["ibs"],
    "crisps":["ibs"],
    "rice cakes":["ibs"],
    "alcohol":["ibs"],
    "ethanol":["ibs"],
    "caffeine":["ibs"],
    "coffee":["ibs"],
    "tea":["ibs"],
    "cocoa":["ibs"],
    "chocolate":["ibs"],
    "miso":["ibs"],
    "soy sauce":["ibs"],
    "saki":["ibs"],
    "gluten":["ibs"]
};

export default function Results({ingredients}){
    console.log({ingredients})
const triggers= ingredients.filter(ingredient=>{
    const possibleIngredient = problemList[ingredient]
    return (possibleIngredient && possibleIngredient.includes("ibs"))
});

const hasTriggers = triggers.length;
return    <>
    {hasTriggers?"👎":"👍"}
    {triggers.map(t=><div>{t}</div>)}
    </>
    
}