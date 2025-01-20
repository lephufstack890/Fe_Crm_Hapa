import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface DevicesPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface DevicesPageFormInput {
  username: string;
}
