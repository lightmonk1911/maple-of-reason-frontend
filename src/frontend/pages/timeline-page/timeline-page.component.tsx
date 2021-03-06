import React from 'react';
import { routes } from '../../navigation/navigation';
import { block } from '../../../../node_modules/bem-cn/lib/index.js';
import { NavBar } from '../../components/navbar/navbar.component';

const b = block('timeline-page');

export const TimelinePage: React.FunctionComponent = () => (
  <>
    <NavBar routes={routes} />
    <div className={b('page-content').mix('page-content')}>
      Timeline page content
    </div>
  </>
);
