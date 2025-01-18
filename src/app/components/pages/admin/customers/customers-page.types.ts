import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface CustomersPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface CustomersPageFormInput {
  username: string;
}
