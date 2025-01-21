import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface LoginsPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface LoginsPageFormInput {
  username: string;
}
