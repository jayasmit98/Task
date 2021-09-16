import React from 'react'
import '../css/reset.css'
import '../css/addish.css'
import {useState, useEffect} from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import {adddishes, getdishes} from '../Service/api'
import { FormGroup, FormControl, InputLabel, Input, Select, MenuItem, Chip, makeStyles, Button  } from '@material-ui/core'
const ingredients=[
    "oil","onion","potatos","garlic","chilli","pasta","Wheat","Spices"
]


const initialdish = {
    name:"",
    ingredients:[],
}
export default function Adddish(){
    var history = useHistory();
   
    var [dishes, setDishes] = useState(initialdish);
    console.log(dishes);
    const addvalchange = (e) => {
        
        
        setDishes({...dishes, [e.target.name]:e.target.value});
        
    }

    const adddishdets = async() => {
        console.log("working");
        await adddishes(dishes);
        getdishes();
        history.push("/"); 
    }
    /*const handleChangeMultiple = (e) => {
        const { options } = e.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        setDishes({...dishes, [e.target.name]:e.target.value});
      };*/
    return(
        <FormGroup className="add_container">
            <FormControl>
                <InputLabel htmlFor="dish_name">Dish</InputLabel>
                <Input  name="name" id="dish_name" onChange={(e)=>addvalchange(e)} value={dishes.name}/>
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="demo-multiple-chip" >Ingredients</InputLabel>
                <Select
                  id="demo-mutiple-chip"
                  multiple
                  name="ingredients"
                  value={dishes.ingredients}
                  onChange={(e)=>addvalchange(e)}
                >
                  {ingredients.map((name) => (
                    <MenuItem  value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={()=>adddishdets() }>Save</Button>
            </FormControl>
        </FormGroup> 
       
    )
}