import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Main} from "./Components/Main/Main";
import "./App.scss";

export default function App(){
    return (
        <div className="App-Container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};