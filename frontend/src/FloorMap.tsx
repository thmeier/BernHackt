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
			{data.items.filter(i => i.id === props.location).map(i => (
				<div
					class={'pointer'}
					key={i.id}
					style={{
						top: `min(${i.x}vh, ${i.x}vw)`,
						left: `min(${i.y}vh, ${i.y}vw)`,
					}}
					title={i.name}
				/>
			))}
			<img src={SERVER_URL + 'img/' + data.background} />
		</div>
	);
}
