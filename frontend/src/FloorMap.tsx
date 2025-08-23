import axios from 'axios';
import { useEffect, useState } from 'preact/hooks';
import { SERVER_URL } from './static';

export function FloorMap(props: { location: string; }) {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(SERVER_URL + 'location/' + props.location + '/data')
			.then((r) => {
				setData(r.data);
			});
	}, [props.location]);

	return data && (
		<div class={'map'}>
			{data.items.map(i => (
				<div style={{ position: 'relative', top: `min(${i.x}vh, ${i.x}vw)`, left: `min(${i.y}vh, ${i.y}vw)`, width: 10, height: 10, backgroundColor: i.id === props.location ? 'red' : 'blue' }} />
			))}
			<img src={SERVER_URL + 'img/' + data.background} />
		</div>
	);
}
