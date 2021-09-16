import React from 'react'
import '../css/reset.css'
import '../css/editdist.css'
import {useEffect, useState} from 'react'
import {getdishes, editdishes} from '../Service/api'
import { useParams, useHistory } from 'react-router-dom';
import { FormGroup, FormControl, InputLabel, Input, Select, MenuItem, Chip, makeStyles, Button  } from '@material-ui/core'
const ingredients=[
    "oil","onion","potatos","garlic","chilli","pasta","Wheat","Spices"
]
const initial = {
    name:"",
    ingredients:[],
}
export default function Editdist(){
    const {id} = useParams();
    const history = useHistory();
    const [dishes,setDishes] = useState(initial);
    useEffect(()=>{
        loaddata();
    },id);

    const loaddata = async() => {
        const response = await getdishes(id);
        setDishes(response.data);
        
    }
    const addvalchange = (e) => {
        
        
        setDishes({...dishes, [e.target.name]:e.target.value});
        
    }
    const editdish = async () => {
        const resp = await editdishes(id, dishes);
        history.push("/");

    }

    return (
        <FormGroup className="edit_container">
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
                <Button className="save_button" variant="contained" color="primary" onClick={()=>editdish() }>Save</Button>
            </FormControl>
        </FormGroup> 
    )
}