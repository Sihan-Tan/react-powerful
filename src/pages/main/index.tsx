import React from 'react';
import { countAtom } from '@states/common';
import { useAtom } from 'jotai';
const Main = () => {
  const [state, setState] = useAtom(countAtom);

  const handleAdd = () => {
    setState((prev) => prev + 1)
  }

  const handleMin = () => {
    setState((prev) => prev - 1)
  }

  return <div>
    This is Main page
    <br />
    <button onClick={handleAdd}>inc</button>
    <button onClick={handleMin}>dec</button>
  </div>
}

export default Main;