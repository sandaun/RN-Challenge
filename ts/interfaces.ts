export interface Doc {
  Title: string;
  Version: string;
  Contributors: Contributor[];
  Attachments: string[];
  CreatedAt: string;
  UpdatedAt: string;
  ID: string;
}

export interface Contributor {
  ID: number;
  Name: string;
}

export interface BottomModalRef {
  open: () => void;
  close: () => void;
}

export interface Notification {
  Timestamp: string;
  DocumentTitle: string;
}

export interface File {
  Attachments: string[];
  Contributors: Contributor[];
  ID: number;
}

export interface AppContext<T> {
  contextData?: T;
  setContextData?: (cb: (value: T) => T) => void;
}

export interface ContextData {
  Notifications: Notification[],
  Documents: Partial<Doc>[],
  Attachments: string[];
  Contributors: Contributor[];
  filterBy: string;
}
