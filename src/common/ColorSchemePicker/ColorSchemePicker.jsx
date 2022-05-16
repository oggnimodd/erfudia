import React, { useState, useRef } from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { PickerButton } from './ColorSchemePicker.style';
import ColorSchemeOptions from './ColorSchemeOptions';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const ColorSchemePicker = () => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef();

  const toggleShowOption = () => {
    setShowOptions(!showOptions);
  };

  useOnClickOutside(optionsRef, () => setShowOptions(false), showOptions);

  return (
    <>
      <PickerButton
        onClick={toggleShowOption}
        style={{
          pointerEvents: showOptions ? 'none' : 'auto',
        }}
      >
        {showOptions ? <AiOutlineClose /> : <FiSettings />}

      </PickerButton>
      {showOptions && <ColorSchemeOptions ref={optionsRef} /> }
    </>
  );
};

export default ColorSchemePicker;
