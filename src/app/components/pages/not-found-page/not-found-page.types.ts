import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface NotFoundPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface NotFoundPageFormInput {
  username: string;
}
