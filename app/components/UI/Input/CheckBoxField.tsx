import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBoxField({checked, setChecked, ...props}) {

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange} 
      required
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}