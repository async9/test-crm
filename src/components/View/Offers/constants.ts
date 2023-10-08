import { UiOffersColumnType } from '@/types/ui/types';
import { QueryVariantType } from './types';

export const dataColumns: {
  id: number;
  query: QueryVariantType;
  variant: UiOffersColumnType;
  label: string;
}[] = [
  { id: 1, variant: 'prospectare', label: 'Prospectare', query: 'PROSPECTARE' },
  { id: 2, variant: 'contact', label: 'Agenda lucru', query: 'CONTACT' },
  { id: 3, variant: 'oferte', label: 'Oferte', query: 'OFERTA' },
  { id: 4, variant: 'nuAcum', label: 'Nu acum', query: 'NU_ACUM' },
  { id: 5, variant: 'comenzi', label: 'Comenzi', query: 'COMANDA' },
  { id: 6, variant: 'facturi', label: 'Facturi', query: 'FACTURA' },
  {
    id: 7,
    variant: 'refuzClient',
    label: 'Refuz client',
    query: 'REFUZ_CLIENT',
  },
];

export const selectTimeline = [
  { label: 'Luna curenta', value: 'month' },
  { label: 'Septamana curenta', value: 'week' },
  { label: 'Ziua curenta', value: 'day' },
];

export const selectBySearchType = [
  { label: 'Titlu lead', value: 'titluLead' },
  { label: 'Nume client', value: 'numeClient' },
  { label: 'Telefon', value: 'telefon' },
  { label: 'Nr. comanda', value: 'comanda' },
  { label: 'Nr. oferta', value: 'oferta' },
];

export const selectDealer = [
  { label: 'Carreta srl', value: 'carretaSrl' },
  { label: 'Partner exclusive', value: 'partnerExclusive' },
];

export const selectSearchDealer = [
  { label: 'Cauta dealer', value: 'cautaDealer' },
];

export const selectDepartment = [
  { label: 'Cauta departamnet', value: 'departament' },
];

export const selectAgent = [{ label: 'Cauta agent', value: 'agent' }];

export const selectNewEntryDetails = [
  { label: 'Acoperis nou', value: 'acoperisNou' },
  { label: 'Schimbare acoperis', value: 'schimbareAcoperis' },
  { label: 'Gard', value: 'gard' },
  { label: 'Terasa', value: 'terasa' },
  { label: 'Velux', value: 'velux' },
  { label: 'Industriale', value: 'industriale' },
  { label: 'Elemente speciale', value: 'elementeSpeciale' },
  { label: 'Altele', value: 'altele' },
];

export const selectNewEntryRegion = [
  { label: 'Alba', value: 'alba' },
  { label: 'Arad', value: 'arad' },
  { label: 'Arges', value: 'arges' },
  { label: 'Bacau', value: 'bacau' },
  { label: 'Bihor', value: 'bihor' },
  { label: 'Bistrita Nasaud', value: 'bistritaNasaud' },
  { label: 'Botosani', value: 'botosani' },
  { label: 'Braila', value: 'braila' },
  { label: 'Brasov', value: 'brasov' },
  { label: 'Bazau', value: 'bazau' },
  { label: 'Caras Severin', value: 'carasSeverin' },
  { label: 'Cluj', value: 'cluj' },
  { label: 'Constanta', value: 'constanta' },
  { label: 'Covasna', value: 'covasna' },
  { label: 'Dolj', value: 'dolj' },
  { label: 'Galati', value: 'galati' },
  { label: 'Timis', value: 'timis' },
  { label: 'Tulchea', value: 'tilchea' },
];
