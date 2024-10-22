import React from 'react';
import { View } from 'react-native';
import { useTable } from 'react-table';

const Columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
];

const Data = [
  {
    name: 'John Doe',
    age: 30,
  },
  {
    name: 'Jane Doe',
    age: 25,
  },
];

const Table = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: Columns, data: Data });

  return (
    <View {...getTableProps()}>
      {headerGroups.map(headerGroup => (
        <View {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
          {headerGroup.headers.map(column => (
            <View {...column.getHeaderProps()} key={column.id}>
              {column.render('Header')}
            </View>
          ))}
        </View>
      ))}
      {rows.map(row => {
        prepareRow(row);
        return (
          <View {...row.getRowProps()} key={row.id}>
            {row.cells.map(cell => (
              <View {...cell.getCellProps()} key={cell.id}>
                {cell.render('Cell')}
              </View>
            ))}
          </View>
        );
      })}
    </View>
  );
};

export default Table;