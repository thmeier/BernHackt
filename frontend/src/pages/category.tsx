import { Store } from './store';
import { Link, Route, Switch } from "wouter";

export function Category(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const parameterCategory = urlParams.get('q'); 
    
    return <div>
        <p>Category</p>
        <a>{parameterCategory}</a>
        <a href="/../store" class="button"><button>Start</button></a>
    </div>

}