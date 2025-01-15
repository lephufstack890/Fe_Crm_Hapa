import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface AppSidebarProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}
