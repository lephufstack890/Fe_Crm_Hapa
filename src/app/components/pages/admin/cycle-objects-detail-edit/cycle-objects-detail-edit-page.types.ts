import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface CycleObjectsDetailEditPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface CycleObjectsDetailEditPageFormInput {
  username: string;
}
