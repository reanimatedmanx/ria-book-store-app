import React from 'react';
import RiaToggle from '../../../../shared/RiaToggle';
import GridSvg from '../../../../resources/icons/grid.svg';
import ListSvg from '../../../../resources/icons/list.svg';

import { SShelfFilters } from './ShelfFilters.styled';
import withRiaTheme from '../../../../core/hocs/withRiaTheme';
import { IBaseTheme } from '../../../Themes/Base';

type ShelfFiltersProps = {
  theme: IBaseTheme;
  onCollectionDisplayChanged: (enabled: boolean) => void;
};

const GridIcon = (): JSX.Element => (
  <img src={GridSvg} width={24} height={24} />
);

const ListIcon = (): JSX.Element => (
  <img src={ListSvg} width={24} height={24} />
);

const ShelfFilters = ({
  theme,
  onCollectionDisplayChanged,
}: ShelfFiltersProps): JSX.Element => (
  <SShelfFilters>
    {/* <div>Filter dropdown 1</div> */}
    {/* <div>Filter dropdown 2</div> */}
    <div>
      <RiaToggle
        on={{
          color: theme.primaryColor,
          Icon: ListIcon,
        }}
        off={{
          color: theme.primaryColor,
          Icon: GridIcon,
        }}
        onClick={onCollectionDisplayChanged}
      />
    </div>
  </SShelfFilters>
);

const ShelfFiltersThemed = withRiaTheme(ShelfFilters);

export default ShelfFiltersThemed;
