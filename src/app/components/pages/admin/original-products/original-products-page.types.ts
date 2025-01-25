import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface OriginalProductsPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface OriginalProductsPageFormInput {
  username: string;
}
