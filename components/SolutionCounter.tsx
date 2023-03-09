import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { atom, useRecoilState } from 'recoil';

type SelectItems = {
  value: string;
  name: string;
};

type SolutionCounter = {
  items: SelectItems[];
};

export const solutionCounterState = atom({
  key: 'solutionCounterState',
  default: 0,
});

const SolutionCounter = (solutionCounter: SolutionCounter) => {
  const { items } = solutionCounter;
  const [value, setValue] = useState(items[0].value);
  const [label, setLabel] = useState(items[0].name);
  const [counter, setCounter] = useRecoilState(solutionCounterState);
  setCounter(Number(value));

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
    setLabel(e.target.name);
    setCounter(Number(e.target.value));
  };

  return (
    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} label={label} onChange={handleChange}>
      {items.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SolutionCounter;
