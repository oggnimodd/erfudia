import React, { useState, useLayoutEffect, useRef } from 'react';

const useRect = () => {
  const ref = useRef();
  const [boxDimension, setBoxDimension] = useState(0);

  useLayoutEffect(() => {
    const dimension = ref.current.getBoundingClientRect();

    setBoxDimension(dimension);
  }, []);

  return { ref, ...boxDimension };
};

export default useRect;
