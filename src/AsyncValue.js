import React from "react";
import ReactDOM from "react-dom";

export class AsyncValue extends React.Component {
	state = { asyncValue: this.props.defaultValue };
	componentDidMount() {
		ReactDOM.unstable_deferredUpdates(() => {
			this.setState((state, props) => ({ asyncValue: props.value }));
		});
	}
	componentDidUpdate() {
		if (this.props.value !== this.state.asyncValue) {
			ReactDOM.unstable_deferredUpdates(() => {
				this.setState((state, props) => ({ asyncValue: props.value }));
			});
		}
	}
	render() {
		return this.props.children(this.state.asyncValue);
	}
}
