// WARNING: This is a temporary API because these
// features aren't exposed by React yet

import React from "react";

/*
Tip: Apollo Engine caching is super fast,
so you probably won't get to see the fallback UI.

To artifically slow queries down
so you can see the fallback UI from Placeholder in action,
wrap them in a Delay component!
*/

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function Never() {
	// Throws a promise that resolves after some arbitrarily large
	// number of seconds. The idea is that this component will never
	// resolve. It's always wrapped by a Timeout.
	throw delay(10000);
}

function Delay({ ms }) {
	return (
		<React.Timeout ms={ms}>
			{didTimeout => {
				if (didTimeout) {
					// Once ms has elapsed, render null. This allows the rest of the
					// tree to resume rendering.
					return null;
				}
				return <Never />;
			}}
		</React.Timeout>
	);
}

export default Delay;
