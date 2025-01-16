import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface AccountPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface AccountPageFormInput {
  username: string;
}
