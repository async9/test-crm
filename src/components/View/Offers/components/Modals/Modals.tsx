import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import NewEntryForm from '@/components/Forms/NewEntry/NewEntryForm';
import ModalWrapper from '@/components/ModalWrapper/ModalWrapper';
import { selectShowModal } from '@/store/ui/uiSelector';
import { uiActions } from '@/store/ui/uiSlice';

const Modals: FC = () => {
  const showNewNetryForm = useAppSelector((state) =>
    selectShowModal(state, 'newEntryForm')
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
    </>
  );
};

export default Modals;
