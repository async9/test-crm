export type SidebarDataType = {
  header: string;
  content: {
    label: string;
    icon: string;
    content: {
      label: string;
      header: string;
      subHeader: string;
      name: string;
      to: string;
    }[];
  }[];
};

export type UiMenuType =
  | 'user'
  | 'sidebar'
  | 'targets'
  | 'notifications'
  | 'navigation';

export type UiModalType = 'newEntryForm' | 'viewOptionsTable';
