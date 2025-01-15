import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import React from 'react';

function HomePage() {
  return (
    <Page>

    </Page>
  );
}

export default React.memo(withResourceBundle(HomePage, () => import('./translations')));
