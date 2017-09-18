/**
 * External dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import DocumentHead from 'components/data/document-head';
import FormattedHeader from 'components/formatted-header';
import Main from 'components/main';

const Placeholder = ( { translate } ) => {
	return (
		<Main>
			<DocumentHead title={ translate( 'Site Settings' ) } />
			<FormattedHeader
				headerText={ translate( 'Disconnect' ) }
			/>
		<Card className="site-settings__placeholder">
			</Card>
		</Main>
	);
};

export default localize( Placeholder );
