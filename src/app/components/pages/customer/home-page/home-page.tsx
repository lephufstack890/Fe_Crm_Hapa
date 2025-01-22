import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import React from 'react';
import { HomePageProps } from './home-page.types';

function HomePage({ className }: HomePageProps) {
  return (
    <Page>

    </Page>
  );
}

export default React.memo(withResourceBundle(HomePage, () => import('./translations')));
