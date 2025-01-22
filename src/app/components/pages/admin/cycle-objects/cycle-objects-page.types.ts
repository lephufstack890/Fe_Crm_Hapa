import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface CycleObjectsPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface CycleObjectsPageFormInput {
  username: string;
}
