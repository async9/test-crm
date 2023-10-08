export type StatusDataType = {
  title: string;
  subtitle: string;
  lastStatusDate: string;
  contactName: string;
  contactPhone: string;
  offers: number;
  totalPrice: number;
  address: {
    address: string;
    city: string;
  };
  commandDetails: {
    commandId: string;
    commandNumber: string;
    commandSeries: string;
  };
  rootUuid: string;
};

export type QueryVariantType =
  | 'PROSPECTARE'
  | 'OFERTA'
  | 'CONTACT'
  | 'NU_ACUM'
  | 'COMANDA'
  | 'FACTURA'
  | 'REFUZ_CLIENT';

export type QueryAdditionalAssigmentType =
  | 'ASSIGNMENTS_EXPIRED'
  | 'ASSIGNMENTS_FOR_TODAY'
  | 'ASSIGNMENTS_FOR_THIS_MONTH';
