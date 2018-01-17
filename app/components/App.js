const React = require('react')
const Popular = require('./Popular')

class App extends React.Component {
    render() {
        return (
            <div className = 'container'>
                <Popular />
                {/* Hello World! */}
            </div>
        )
    }
}

module.exports = App