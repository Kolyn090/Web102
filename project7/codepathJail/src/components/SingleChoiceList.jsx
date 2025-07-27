import React, { useState } from 'react';
import camelToTitle from '../util/CamelToTitle';

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function SingleChoiceList({ title, options, initial=null, onChange }) {
  const [selected, setSelected] = useState(initial);

  const handleSelect = (option) => {
    setSelected(option);
    if (onChange) {
      onChange(option);
    }
  };

  const optionChunks = chunkArray(options, 4);

  return (
    <div style={{ fontSize: 20 }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', gap: 40, marginTop: -30 }}>
        {optionChunks.map((chunk, columnIndex) => (
          <ul key={columnIndex} style={{ listStyle: 'none', padding: 0 }}>
            {chunk.map((option, i) => {
              const isSelected = selected === option;
              return (
                <li
                  key={i}
                  onClick={() => handleSelect(option)}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 10,
                    userSelect: 'none',
                  }}
                >
                  <span
                    style={{
                      height: 16,
                      width: 16,
                      borderRadius: '50%',
                      border: '2px solid #007bff',
                      marginRight: 10,
                      display: 'inline-block',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    {isSelected && (
                      <span
                        style={{
                          display: 'block',
                          height: 8,
                          width: 8,
                          borderRadius: '50%',
                          backgroundColor: '#007bff',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    )}
                  </span>
                  <span>{camelToTitle(option)}</span>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}