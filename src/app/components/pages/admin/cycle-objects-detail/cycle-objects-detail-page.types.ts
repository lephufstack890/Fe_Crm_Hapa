import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface CycleObjectsDetailPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface CycleObjectsDetailPageFormInput {
  username: string;
}
