import express from 'express';
import { categories, locations, products } from './data';
import cors from 'cors';

const app = express();
app.use(cors());

// Product routes
app.get('/product', (_, res) => {
	res.send(products);
});

app.get('/product/:id', (req, res) => {
	const product = products.find(p => p.id == req.params.id);
	if (!product) {
		res.sendStatus(404);
	} else {
		res.send({
			...product,
			category: categories.find(c => c.id == product.categoryId),
			location: locations.find(l => l.id == product.locationId)
		});
	}
});

app.get('/product/search/:query', (req, res) => {
	res.send(products.filter(p => p.name.includes(req.params.query)));
});

// Category routes
app.get('/category', (_, res) => {
	res.send(categories);
});

app.get('/category/:id', (req, res) => {
	const category = categories.find(p => p.id == req.params.id);
	if (!category) {
		res.sendStatus(404);
	} else {
		res.send(category);
	}
});

app.get('/category/search/:query', (req, res) => {
	res.send(categories.filter(p => p.name.includes(req.params.query)));
});


app.get('/location:id', (req, res) => {
	const location = locations.find(l => l.id == req.params.id);
	if (!location) {
		res.sendStatus(404);
	} else {
		res.send(location);
	}
});

// Search route
app.get('/search/:query', (req, res) => {
	res.send({
		products: products.filter(p => p.name.toLowerCase().includes(req.params.query.toLowerCase())),
		categories: categories.filter(p => p.name.toLowerCase().includes(req.params.query.toLowerCase())),
	});
});

// Start the app
app.listen(3000);
console.log('Started');
