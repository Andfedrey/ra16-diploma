import React from 'react';

type TLoadmore = {
  clickHandle: () => void;
};
export const LoadMore: React.FC<TLoadmore> = ({ clickHandle }) => {
  return (
    <button className="btn btn-outline-primary" onClick={clickHandle}>
      Загрузить ещё
    </button>
  );
};
