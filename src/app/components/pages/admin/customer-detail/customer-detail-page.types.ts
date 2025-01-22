import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface CustomerDetailPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface CustomerDetailPageFormInput {
  username: string;
}
