import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IUser } from './Interfaces';
import SimpleUserProfile from './components/SimpleUserProfile';
import Seprator from './components/Separator';
import BetterButton from './components/BetterButton';

const App = () => {
	const [user, setUser] = useState<IUser>({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const init = () => {
			const saveName = localStorage.getItem('savedName');
			if (saveName) {
				setUser(JSON.parse(saveName));
			} else {
				fetchData();
			}
		};

		init();
	}, [])

	const fetchData = async () => {
		setLoading(prev => !prev);
		try {
			const response: AxiosResponse = await axios.get('https://randomuser.me/api');
			const result: IUser = response.data.results[0];
			const data = { name: result.name, email: result.email };
			setUser(data);
			localStorage.setItem("savedName", JSON.stringify(data));
			setLoading(prev => !prev);
		} catch (error) {
			console.log(error);
			setLoading(prev => !prev);
		}
	};

	return (
		<div className="App">
			<SimpleUserProfile user={user} loading={loading} />
			<Seprator height={80} />
			<BetterButton title='New User' onClick={fetchData} loading={loading} />
		</div>
	);
}


export default App;
