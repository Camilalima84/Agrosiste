import React from "react";

import { MdModeEdit, MdDelete } from 'react-icons/md';
import { Button, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { Headingtable, CardList, ItemActions } from './styled';

export const CustomTable = (props) => {
  const { columns, data } = props;

  return (
    <Table>
      <Thead>
        <Tr>
        {columns.length > 0 && columns.map((item, idx) => (
          <Th key={idx}>{item}</Th>
        ))}
        </Tr>
      </Thead>
      <Tbody>
      {data.length > 0 && data.map((item, idx) => {
        const rowsCells = Object.keys(item);

        return (
          <CardList key={idx}>
            {rowsCells.map((cell, idx) => (
              <Td key={idx}>{item[cell]}</Td>
            ))}
            <Td>
              <Button style={{ marginRight: '15px' }}>
                <MdModeEdit size={20} />
              </Button>
              <Button>
                <MdDelete size={20} />
              </Button>
            </Td>

          </CardList>
        )
      })}
      
      </Tbody>
    </Table>
  )
}