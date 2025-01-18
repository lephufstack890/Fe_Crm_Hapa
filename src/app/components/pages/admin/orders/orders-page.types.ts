import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface OrdersPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface OrdersPageFormInput {
  username: string;
}
