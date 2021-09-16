import React, { useEffect, useState } from 'react'
import '../css/reset.css'
import '../css/list.css'
import {getdishes} from '../Service/api'
import {FormControl, Input, Button} from '@material-ui/core'
import {Pagination} from '@material-ui/lab';
import {Link, Route} from 'react-router-dom'


export default function List(){
    var [dishes,setDishes] = useState([]);
    var [searchTerm, setSearchTerm] = useState('');
    var [page,setPage] = useState(0);
    var [rowsPerPage, setRowsPerPage] = useState(6);
    const handlePageChange = (e,newPage) => {
        setPage(newPage)
    }
    const getAlldishes=async ()=> {
        const response = await getdishes();
        console.log(response.data);
        setDishes(response.data);
    }
    
    useEffect(() => {
        getAlldishes();
    },[searchTerm]);
    const searchChange = (e) =>{
        setSearchTerm(e.target.value);
    }
    
    return(
        <>
            <Route>

            
            <header>
                <div className="part_1">
                    <Link to="/"><h1>Dishes</h1></Link>
                    <Link to="/add"><Button className="create_button">+Create</Button></Link>
                </div>
                <div className="search">
                    <FormControl>
                        <Input placeholder="Search" value={searchTerm} onChange={(e)=>{searchChange(e)}} ></Input>
                    </FormControl>

                </div>
                
            </header>
            <section className="list">
                <ul >
                       
                        {(searchTerm)?
                            dishes.filter((val)=>{
                                if(searchTerm==""){
                                    return val
                                } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }
                            }).map((el,key)=>{
                                return (
                                <Link to={`/edit/${el.id}`}><li className="food_items">{el.name}</li></Link>
                                )})
                        :
                        
                            dishes.filter((val)=>{
                                if(searchTerm==""){
                                    return val
                                } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }
                            }).slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage).map((el,key)=>{
                               return (
                               <Link to={`/edit/${el.id}`}><li className="food_items">{el.name}</li></Link>
                               )})
                        }
                            
                        
                        
                            
                       
                                      
                </ul>
                <Pagination count={(parseInt(dishes.length/6)+1)} color="primary" variant="outlined" shape="rounded" onChange = {(e,value)=> setPage(value-1)} hidePrevButton hideNextButton />                  
            </section>
            </Route>   
        </>
    )
}