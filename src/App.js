import Wrapper from "./components/Wrapper";
import Attributions from "./components/Attributions";
import Header from "./components/Header";

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
