import React, { Fragment } from "react";

function Placeholder({ delayMs, fallbackUI, children }) {
	return (
		<React.Timeout ms={delayMs}>
			{didTimeout => (
				<Fragment>
					<div hidden={didTimeout}>{children}</div>
					{didTimeout ? fallbackUI : null}
				</Fragment>
			)}
		</React.Timeout>
	);
}

export default Placeholder;
