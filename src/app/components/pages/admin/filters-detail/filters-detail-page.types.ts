import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface FiltersPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface FiltersPageFormInput {
  username: string;
}
