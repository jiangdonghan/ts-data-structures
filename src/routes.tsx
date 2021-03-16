import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {ArrayPage} from "./modules/array";
import App from "./App";
import {StackPage} from "./modules/stack";

export const Router = ()=>{
  return (
    <BrowserRouter>
        <Route path='/' exact component={App}/>
        <Route path='/array' exact component={ArrayPage}/>
        <Route path='/stack' exact component={StackPage}/>
    </BrowserRouter>
  )
}
