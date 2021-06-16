import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <div>
                {this.props.name ? <h3> Hey, {this.props.name}!</h3> : <h3> Hey, stranger! </h3>}
            </div>
        )
    }
}

export default Person;