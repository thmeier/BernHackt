import axios from "axios";
import { ICategory, ILocation, IProduct } from "interfaces";
import { useEffect, useState } from "preact/hooks";
import { FloorMap } from '../FloorMap';
import { SERVER_URL } from '../static';
import { FiFolder, FiMenu, FiSearch, FiTag } from 'react-icons/fi';
import { useLocation } from 'wouter';

let timeout = null;

export function Store() {
	const [_, setLocation] = useLocation();

	const [query, setQuery] = useState('');
	const [results, setResults] = useState<{ products: IProduct[], categories: ICategory[]; } | undefined>(undefined);
	const [queryLocation, setQueryLocation] = useState<ILocation>();
	const [foundLocation, setFoundLocation] = useState<ILocation>();


	function clearSearch(name: string) {
		setResults(undefined);
		setQuery(name);
		setTimeout(() => clearTimeout(timeout), 10);
	}

	useEffect(() => {
		if (query == '') {
			setResults(undefined);
			return;
		}
		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(() => {
			axios.get(SERVER_URL + 'search/' + query).then((response) => {
				if (response.data.products.length <= 0 && response.data.categories.length <= 0) {
					setResults(undefined);
				} else {
					setResults(response.data);
				}
			});
		}, 300);
	}, [query]);

	useEffect(() => {
		if (queryLocation) {
			axios.get(SERVER_URL + 'location/' + queryLocation).then((response) => {
				setFoundLocation(response.data);
			});
		}
	}, [queryLocation]
	);

	return (
		<div class="container">
			<div class="header">
				<h1 class="title">StoreNameHere</h1>
				<FiMenu class="menu icon" size={24} />
			</div>
			<div class="sep" />
			<div class={'searchContainer'}>
				<div
					class="searchBubble"
					data-long-placeholder="Artikel oder Kategorie"
					data-short-placeholder="Suche"
				>
					<input
						class="searchField"
						type="text"
						placeholder="Artikel oder Kategorie"
						value={query}
						onChange={e => setQuery(e.currentTarget.value)}
					>
					</input>
					<button class="searchButton">
						<FiSearch class="icon" size={20} />
					</button>
				</div>
				{results && <div class={'results'}>
					{results.products.map((product, i) => (
						<div onClick={() => {
							setQueryLocation(product.locationId);
							clearSearch(product.name);
						}}>
							<FiTag class="icon"/>
							{product.name}
						</div>
					)
					)}
					{results.categories.map((category, i) => <div
						onClick={() => {
							setLocation('./category/?q=' + category.name);
							clearSearch(category.name);
						}}
					>
						<FiFolder class="icon"/>
						<span class="category">{category.name}</span>
					</div>
					)}
				</div>}
			</div>
			{foundLocation && (
				<div>
					<FloorMap location={foundLocation.id} />
					<a>{foundLocation.name}</a>
				</div>
			)}
		</div>
	);
}
