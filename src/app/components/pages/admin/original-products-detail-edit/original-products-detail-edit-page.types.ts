import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface OriginalProductsDetailEditPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface OriginalProductsDetailEditPageFormInput {
  username: string;
}
