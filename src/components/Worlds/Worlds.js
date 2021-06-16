import React from 'react';
const names = [
    "UNIVERSE",
    "Milky Way",
    "Solar System",
    "Sun",
    "Earth",
    "World"
];
class Worlds extends React.Component {
    render() {
        return (
            <div>
                {names.map(name => <h2 key={name}>Hello, {name}!</h2>)}
            </div>
        )
    }
}

export default Worlds;