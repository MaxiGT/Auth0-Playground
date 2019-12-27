import React from 'react';
import PropTypes from 'prop-types';

const generateSize = (size) => {
	switch (size) {
		case 'xs':
			return 'fa-1x';
		case 'sm':
			return 'fa-2x';
		case 'md':
			return 'fa-3x';
		case 'lg':
			return 'fa-4x';
		default:
			return 'fa-5x';
	}
}

const Spinner = ({ loading, children, size }) => {
	if (loading) {
		return(
			<div className='spinner__container'>
				...Loading
				<div>
					<i
						className={`fa fa-circle-o-notch fa-spin ${generateSize(size)} fa-fw`}
						aria-hidden='true'/>
				</div>
			</div>
		)
	};

	return children;
};

Spinner.propTypes = {
	size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
	loading: PropTypes.bool,
	children: PropTypes.object,
};

Spinner.defaultProps = {
	size: 'xl',
}

export default Spinner;