import React, { useState } from 'react';
import LoadModal from 'components/modals/LoadModal';
import style from './header.module.css';

export default function Header({ onLoadHash, isEditMode, onEditHandler }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={style.header}>
      <div></div>
      <div className={style.options}>
        <button onClick={onEditHandler}>{isEditMode ? 'View' : 'Edit'}</button>
      </div>

      {isModalOpen && <LoadModal setOpen={setIsModalOpen} onLoadHash={onLoadHash} />}
    </header>
  );
}
