import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface OrderPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface OrderPageFormInput {
  username: string;
}
