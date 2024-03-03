import episodes from "../data/episodes.json";

function Greeting({ name }) {
    return <h2>Hello, {name}</h2>;
}

function Sum({ num1, num2 }) {
    return (
        <p>
            {num1} + {num2} = {num1 + num2}
        </p>
    );
}

//text colour generator based on props input
function RandomColour(props) {
    return <p><font color={props.colour}>{props.colour}</font></p>
}

//


//display episode details
function TVEpisode(props) {
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

    const listItems = fruits.map((fruit, ix) =>
        <p key={ix}>
        <b>{fruit.type + ', '}</b>
        </p>
        )

    return (
        <header>
            <h1>cats</h1>
            {listItems}
        </header>
    );
}

//functions only take one argument in react
// even if there's multiple bits, it'll be compressed into a singular object and passed through

export default function App() {
    return (
        <div>
            <MyHeader />
            <Greeting name="Dani" />
            <Greeting name="Bob" />
            <Greeting name="Huss" />
            <FruitsList />
            <FruitsList />
            <FruitsList />
            <RandomColour colour="red"/>
            <RandomColour colour="magenta"/>
            <Sum num1={100} num2={2010} label/>
            <Sum num1={39} num2={3} />
            <TVEpisode episodeData={episodes[0]} />
            <TVEpisode episodeData={episodes[1]} />
            <Footer />
        </div>

        
    );
}
