import React, { useState } from 'react';

type Props = {
  onSearch: (city: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState('');

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8 }}>
      <input
        aria-label="city"
        placeholder="Enter city (e.g. London)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: '8px 12px', flex: 1 }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>
        Search
      </button>
    </form>
  );
}
