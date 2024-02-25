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

function TVEpisode(props) {
    return (
        <div>
            <h2>{props.episodeData.name}</h2>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            Uses <a href="https://oxal.org/projects/sakura/">Sakura CSS.</a>
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

export default function App() {
    return (
        <div>
            <MyHeader />
            <Greeting name="Dani" />
            <Greeting name="Bob" />
            <Greeting name="Huss" />
            <Sum num1={100} num2={2010} />
            <Sum num1={39} num2={3} />
            <TVEpisode episodeData={episodes[0]} />
            <TVEpisode episodeData={episodes[1]} />
            <Footer />
        </div>
    );
}
