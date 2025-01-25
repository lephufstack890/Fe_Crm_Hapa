import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface OriginalProductsDetailPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface OriginalProductsDetailPageFormInput {
  username: string;
}
