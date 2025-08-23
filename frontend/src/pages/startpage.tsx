import { Store } from './store';
import { Link, Route, Switch } from "wouter";

export function Startpage(){
    return <div style=" display: flex; justify-content: center;align-items: center; height: 100vh;">
        Startpage
        <a href="./store" class="button"><button>Start</button></a>
    </div>

}