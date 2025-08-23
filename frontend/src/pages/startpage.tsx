import { Store } from './store';
import { Link, Route, Switch } from "wouter";

export function Startpage(){
    return <div>
        Startpage
        <a href="./store" class="button"><button>Start</button></a>
    </div>

}