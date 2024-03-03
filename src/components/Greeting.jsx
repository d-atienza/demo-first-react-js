export function Greeting(props) {
    console.log('greeting component rerendered', props)

    function howdy(name) {
        return console.log('Howdy,', name, '!');
    }
    

    return <button onClick={() => howdy( props.name ) }> {props.name} </button>;
}