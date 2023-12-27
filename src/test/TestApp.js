import React from 'react';
import { FixedSizeGrid } from 'react-window';

const MyGrid = ({ items, columns }) => {
  const rowCount = Math.ceil(items.length / columns);
  const columnWidth = 200;
  const rowHeight = 50;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columns + columnIndex;
    const item = items[index];

    return (
      <div style={{ ...style, border: '1px solid black', padding: '10px', color: "black" }}>
        {item && item.name}
      </div>
    );
  };

  return (
    <FixedSizeGrid
      columnCount={columns}
      columnWidth={columnWidth}
      height={400}
      rowCount={rowCount}
      rowHeight={rowHeight}
      width={800}
    >
      {Cell}
    </FixedSizeGrid>
  );
};

const TestApp = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    // Add more items as needed
  ];

  return <MyGrid items={items} columns={3} />;
};

export default TestApp;