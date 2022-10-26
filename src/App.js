import { useState } from "react";
import { nanoid } from "nanoid";
import NotesAll from "./components/NotesAll";

const App = () => {
	const [notes, setNotes] = useState([
	{
		id: nanoid(),
		text: "This is my first note!", 
		date: "21/10/2021"
	},
	{
		id: nanoid(),
		text: "This is my second note!", 
		date: "22/10/2021"
	},
	{
		id: nanoid(),
		text: "This is my third note!", 
		date: "23/10/2021"
	}
		]);

	return (
		<div className="container">
			<NotesAll notes={notes}/>
		</div>
	);
};

export default App;
