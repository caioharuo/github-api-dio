import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

export const WrapperTab = styled(Tab)`
  border: 1px solid #ccc;
  border-radius: 16px;

  padding: 16px;
  margin-right: 8px;

  user-select: none;
  cursor: pointer;

  z-index: 999;

  background-color: #fff;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
  }
`;

export const WrapperTabs = styled(Tabs)`
  width: 100%;

  font-size: 16px;

  margin-top: 16px;
`;

WrapperTabs.tabsRole = 'Tabs';

export const WrapperTabList = styled(TabList)`
  display: flex;

  list-style-type: none;

  padding: 4px;
  margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  margin-top: -5px;

  border: 1px solid #ccc;
  box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3);

  display: none;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
