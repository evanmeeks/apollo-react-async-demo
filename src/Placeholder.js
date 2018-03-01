import React, { Fragment } from "react";

function Placeholder({ delayMs, fallbackUI, children }) {
	return (
		<React.Timeout ms={delayMs}>
			{didTimeout => {
				return (
					<Fragment>
						<span hidden={didTimeout}>{children}</span>
						{didTimeout ? fallbackUI : null}
					</Fragment>
				);
			}}
		</React.Timeout>
	);
}

export default Placeholder;
