import express from 'express';
import { categories, products } from './data';

const app = express();

app.get('/product/:id', (req, res) => {
	res.send(products[req.params.id]);
});

app.listen(3000);

console.log('Started');
