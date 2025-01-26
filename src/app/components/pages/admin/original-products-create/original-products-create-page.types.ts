import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface OriginalProductsCreatePageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface OriginalProductsCreatePageFormInput {
  username: string;
}
