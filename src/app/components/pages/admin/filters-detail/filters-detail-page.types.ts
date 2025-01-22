import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface FiltersDetailProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface FiltersDetailFormInput {
  username: string;
}
