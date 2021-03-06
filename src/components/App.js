import React from 'react'
import Entery from './Entery'
import axios from 'axios'

export default class App extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			dataToRender: []
		}
	}

	componentDidMount() {
		axios.get('/api/')
		.then( res => {
			console.log('RES', res)
			this.setState ({
				dataToRender: res.data
			})
		})
		.catch(error => console.log(error))

		// this.setState({
		// 	dataToRender: this.props.data
		// })
	}

	componentWillMount() {

	}

	render() {
		console.log('STATE', this.state.dataToRender.data)
		return (
			this.state.dataToRender.data? 
			<div>
				{ 
					this.state.dataToRender.data.map(
						(nam, index) => <Entery name={nam} key={index}/>
					)
				}
			</div> : false
		)
	}
}

	// render() {
 //    return (
 //      <div className="App">
 //        <Header message={this.state.pageHeader} />
 //        <div>
 //          {this.props.contests.map(contest =>
 //            <ContestPreview {...contest} />
 //          )}
 //        </div>
 //      </div>
 //    );
 //  }

// webpack-dev-server --hot --inline