import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface FiltersCreateAndEditPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface FiltersCreateAndEditPageFormInput {
  username: string;
}
