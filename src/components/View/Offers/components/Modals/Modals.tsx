import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import NewEntryForm from '@/components/Forms/NewEntry/NewEntryForm';
import ModalWrapper from '@/components/ModalWrapper/ModalWrapper';
import { selectShowModal } from '@/store/ui/uiSelector';
import { uiActions } from '@/store/ui/uiSlice';
import ViewOptionsTable from '../ViewOprionsTable/ViewOptionsTable';

const Modals: FC = () => {
  const showNewNetryForm = useAppSelector((state) =>
    selectShowModal(state, 'newEntryForm')
  );
  const showViewOptionsTable = useAppSelector((state) =>
    selectShowModal(state, 'viewOptionsTable')
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <ModalWrapper
        show={showNewNetryForm}
        onClose={() =>
          dispatch(
            uiActions.showModal({
              variant: 'newEntryForm',
              show: false,
            })
          )
        }
        title='Intrarea noua'
      >
        <NewEntryForm />
      </ModalWrapper>
      <ModalWrapper
        show={showViewOptionsTable}
        onClose={() =>
          dispatch(
            uiActions.showModal({
              variant: 'viewOptionsTable',
              show: false,
            })
          )
        }
        title='Selecteaza coloanele visible'
      >
        <ViewOptionsTable />
      </ModalWrapper>
    </>
  );
};

export default Modals;
