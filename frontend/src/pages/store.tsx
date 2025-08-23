import axios from "axios";
import { ILocation, IProduct } from "interfaces";
import { useEffect, useState } from "preact/hooks";

let timeout = null;

export function Store() {
	const [query, setQuery] = useState('');
	const [foundArticles, setFoundArticles] = useState<IProduct[]>([]);
  const [queryLocation, setQueryLocation] = useState<ILocation>()
  const [foundLocation, setFoundLocation] = useState<ILocation>()
  var target = ''

	useEffect(() => {
		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(() => {
			axios.get('http://localhost:3000/search/' + query).then((response) => {
				setFoundArticles(response.data.products);
			});
		}, 300);
	}, [query]);

  useEffect(() => {
    axios.get('http://localhost:3000/location/'+queryLocation).then((response) => {
      setFoundLocation(response.data.name)
    })
  }, [queryLocation]
) 

	return (
		<div>
			<div>
				<input value={query} onChange={e => setQuery(e.currentTarget.value)} placeholder={'Search'} />
				<div style={{ display: "flex", flexDirection: "column" }}>
					{foundArticles.map((object, i) => <div><button onClick={()=> {
             setQueryLocation(object.locationId)
          }
           
          }>{object.name}</button></div>)}
          <div>
            <button>{foundLocation}</button>
          </div>
				</div>
			</div>
			<a href="./" class="button"><button>Home</button></a>
			<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
				<g id="gestell1" stroke-width="5" transform="translate(40,16)">
					<desc>Oberer Teil des Gestells </desc>

					<rect id="00" width="27.5" height="20" x="0" y="0" stroke="black" fill="transparent" />
					<rect id="01" width="27.5" height="20" x="27.5" y="0" stroke="black" fill="transparent" />
					<desc> Linker Teil des Gestells </desc>
					<rect id="10" width="20" height="80" x="0" y="20" stroke="black" fill="transparent" />
					<rect id="11" width="20" height="80" x="0" y="100" stroke="black" fill="transparent" />
					<rect id="12" width="20" height="80" x="0" y="180" stroke="black" fill="transparent" />
					<rect id="13" width="20" height="80" x="0" y="260" stroke="black" fill="transparent" />
					<rect id="14" width="20" height="80" x="0" y="340" stroke="black" fill="transparent" />

					<desc> Rechter Teil des Gestells </desc>
					<rect id="20" width="20" height="80" x="35" y="20" stroke="black" fill="transparent" />
					<rect id="21" width="20" height="80" x="35" y="100" stroke="black" fill="transparent" />
					<rect id="22" width="20" height="80" x="35" y="180" stroke="black" fill="transparent" />
					<rect id="23" width="20" height="80" x="35" y="260" stroke="black" fill="transparent" />
					<rect id="24" width="20" height="80" x="35" y="340" stroke="black" fill="transparent" />

					<desc> Unterer Teil des Gestells </desc>
					<rect id="30" width="27.5" height="20" x="0" y="420" stroke="black" fill="transparent" />
					<rect id="31" width="27.5" height="20" x="27.5" y="420" stroke="black" fill="transparent" />
				</g>
			</svg>
		</div>
	);
}
