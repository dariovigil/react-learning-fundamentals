const React = require('react')
const ReactDOM = require('react-dom')
const PropTypes = require('prop-types')

class Badge extends React.Component {
    render(){
        return (
            <div>
                <img
                 src='{this.props.img}'
                 alt='Avatar'/>
                 
                 />
                 <h1>Name: {this.props.name}</h1>
                 <h3>username: {this.props.username}</h3>
            </div>
        )
    }
}

Badge.propTypes = {
    name: PropTypes.string.isRequired,
}

ReactDOM.render(
    <Badge
        name = 'Darío'
    />, document.getElementById('badge')
)