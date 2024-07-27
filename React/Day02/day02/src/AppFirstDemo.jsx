
import "./App.css";
import { Content } from "./components/Content";
import Movies from "./components/Movies";

function App() {

	let itiTracks = [
		{
			trackName: 'React',
			bgColor: 'bg-light',
			instName: 'Ahmed Ali'
		},
		{
			trackName: 'Angular',
			bgColor: 'alert alert-info',
			instName: 'Mona Ali'
		},

	]


	return <>


		<Content objectData={itiTracks[ 0 ]} >
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dicta molestiae, facere quam, autem saepe esse quae fugiat distinctio in explicabo. Quis aperiam enim debitis, voluptate numquam labore aliquid adipisci!</p>
			<button className="btn btn-dark">Show More !</button>
		</Content>
		<Content objectData={itiTracks[ 1 ]} >

		</Content>



	</>;
}

export default App;
