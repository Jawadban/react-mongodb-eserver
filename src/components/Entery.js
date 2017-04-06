import React from 'react'


export default class Entery extends React.Component {
	render() {
		return (
			<div>
				<div>{this.props.name.categoryName}</div>
				<div>{this.props.name.contestName}</div>
			</div>
		)
	}
}