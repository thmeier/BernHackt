import { Store } from './store';
import { Link, Route, Switch } from "wouter";

export function Startpage(){
    return <div>
            <h1 style="text-align: center;">Startpage</h1>
            <div style=" display: flex; justify-content: center;align-items: center; height: 100vh;">
        
            <a href="./store" class="button"><button style="padding-left: 30px; padding-right: 30px"><h2>Start</h2></button></a>
        </div>

        </div>

}