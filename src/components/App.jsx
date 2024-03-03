import episodes from "../data/episodes.json";
import { Greeting } from "./Greeting";
import TurnCounter from "./TurnCounter";


//text colour generator based on props input
function RandomColour(props) {
    return <p><font color={props.colour}>{props.colour}</font></p>
}

//dice roll conditional statement
function DiceRoll() {
    const dice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const index = Math.floor(Math.random() * dice.length);

    if(dice[index] % 2 === 0) {
        return <h5>{dice[index]} means even stevens</h5>
    } else {
        return <h5>{dice[index]} means oddball</h5>
    }
}


//display episode details
function TVEpisode(props) {
    console.log(props)
    const newSummary = removePTags(props.episodeData)

    return (
        <div>
            <h2>{props.episodeData.name}</h2>
            <img src={props.episodeData.image.medium} className="App-logo" alt="episode-image" />
            <p>{newSummary}</p>
        </div>
    );
}

//cleans up the episode summary
function removePTags(episode) {
    const newSummary = episode.summary.replace(/<\/?p>/gi, "");
    return newSummary;
}



function Footer() {
    return (
        <footer>
            Uses <a href="https://oxal.org/projects/sakura/">Sakura CSS. </a>
            Uses <a href="https://github.com/d-atienza/demo-first-react-js">GitHub.</a>
        </footer>
    );
}

function MyHeader() {
    return (
        <header>
            <h1>Welcome to my first React app</h1>
        </header>
    );
}


// challenge #2

function FruitsList() {
    const fruits = [{type: "apple"}, {type: "apple"}, {type: "banana"}, {type: "carrot"}];

    //sometimes needs a unique p key when mapping
    const listItems = fruits.map((fruit, ix) =>
        <p key={ix}>
        <b>{fruit.type + ', '}</b>
        </p>
        )

    return (
        <header>
            <h1>fruity list</h1>
            {listItems}
        </header>
    );
}

//functions only take one argument in react
// even if there's multiple bits, it'll be compressed into a singular object and passed through

export default function App() {
    return (
        <div>
            {/* <div>
            <TVEpisodesList episodeData = {[episodes]}/>
            </div> */}

            <MyHeader />
            <Greeting name="Dani" />
            <Greeting name="Bob" />
            <Greeting name="Huss" />
            <div>
            <FruitsList />
            </div>
            <div>
            <TurnCounter />
            </div>
            <div>
            <h4>DICE STUFF</h4>
            <DiceRoll/>
            </div>
            <div>
            <RandomColour colour="red"/>
            <RandomColour colour="magenta"/>
            </div>
            <div>
            <TVEpisode episodeData={episodes[0]} />
            <TVEpisode episodeData={episodes[1]} />
            </div>
            <Footer />
        </div>

        
    );
}
