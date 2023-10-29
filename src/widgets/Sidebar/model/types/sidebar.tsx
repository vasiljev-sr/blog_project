import React from 'react';

export interface SidebarItemType {
  path: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  title: string;
  authOnly?: boolean;
}
