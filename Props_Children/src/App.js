import "./App.css";
import Card from "./components/card";

function App() {

    const gridBox = {
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
    };

    return (
        <div style={gridBox}>
            <Card
                name="vivek"
                email="thumarvivekkt@gmail.com"
                image="https://images.unsplash.com/photo-1720366252332-a86c8a11d879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            />
            <Card
                name="Aryan"
                email="aryandk9@gmail.com"
                image="https://images.unsplash.com/photo-1720366252332-a86c8a11d879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            />
            <Card
                name="Vatsal"
                email="vatsalkevadiya67@gmail.com"
                image="https://images.unsplash.com/photo-1720366252332-a86c8a11d879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            />
        </div>
    );
}

export default App;
