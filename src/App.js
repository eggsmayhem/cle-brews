import Wrapper from "./components/Wrapper";
import Attributions from "./components/Attributions";
import Header from "./components/Header";

//note that strict mode has been removed due to rendering issues with google-react-map. I could not find a better solution, but it is worth looking into

function App() {
	return (
		<div className="w-full flex flex-col items-center">
			<Header />
			<Wrapper />
			<Attributions />
		</div>
	);
}

export default App;
