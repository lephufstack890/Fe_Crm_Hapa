import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface FilterReplacementSchedulePageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface FilterReplacementSchedulePageFormInput {
  username: string;
}
