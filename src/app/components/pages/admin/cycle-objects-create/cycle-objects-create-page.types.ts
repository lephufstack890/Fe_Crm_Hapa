import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface CycleObjectsCreatePageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface CycleObjectsCreatePageFormInput {
  username: string;
}
