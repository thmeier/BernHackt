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
		<div>
			{data.items.map(i => (
				<div style={{ position: 'relative', top: i.x, left: i.y, width: 10, height: 10, backgroundColor: i.id === props.location ? 'red' : 'blue' }} />
			))}
			<img src={SERVER_URL + 'img/' + data.background} />
		</div>
	);
}
