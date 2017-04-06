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
				dataToRender: res.data.contests
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
		console.log(this.state.dataToRender)
		return (
			<div>
				{ 
					this.state.dataToRender.map(
						(nam, index) => <Entery name={nam} key={index}/>
					)
				}
			</div>
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