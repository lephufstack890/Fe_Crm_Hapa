import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface OrderDetailPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface OrderDetailPageFormInput {
  username: string;
}
