import cors from 'cors';
import express from 'express';
import fs from 'fs';
import { categories, locations, products } from './data';
import type { IServerLocation } from './extra';
import path from 'path';

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


app.get('/location/:id', (req, res) => {
	const location = locations.find(l => l.id == req.params.id);
	if (!location) {
		res.sendStatus(404);
	} else {
		res.send(location);
	}
});

app.get('/location/:id/data', (req, res) => {
	function findMain(location: IServerLocation) {
		if (location.background == null) {
			if (location.parentId == null) {
				throw new Error('Invalid data');
			}
			return findMain(locations.find(l => l.id === location.parentId)!);
		} else {
			return location;
		}
	}

	const location = locations.find(l => l.id == req.params.id);
	if (!location) {
		res.sendStatus(404);
	} else {
		const main = findMain(location)!;
		res.send({
			background: main.background,
			items: locations.filter(l => l.parentId == main.id)
		});
	}
});

app.get('/img/:img', (req, res) => {
	const fileName = 'floors/' + req.params.img;
	if (fs.existsSync(fileName)) {
		res.sendFile(path.resolve(fileName));
	} else {
		res.sendStatus(404);
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
