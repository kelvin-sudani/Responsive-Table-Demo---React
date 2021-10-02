import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './styles.css';
function createData(name, calories, fat, carbs, protein, sodium) {
  return { name, calories, fat, carbs, protein, sodium };
}
const headers = ['Calories', 'Fat', 'Carbs', 'Protein', 'Sodium'];
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 2.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 1.8),
  createData('Eclair', 262, 16.0, 24, 6.0, 1.5),
  createData('Cupcake', 305, 3.7, 67, 4.3, 1.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.4),
];

export default function BasicTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              {headers.map((header) => (
                <TableCell align="right">
                  {header !== 'Calories' ? `${header} (g)` : 'Calories'}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.sodium}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="lists-container">
        <h2>Dessert (100g serving)</h2>
        {rows.map((row, i) => (
          <div key={i}>
            <h3>{row.name}</h3>
            <dl>
              {headers.map((header, i) => (
                <>
                  <dt>
                    {header !== 'Calories' ? `${header} (g)` : 'Calories'}
                  </dt>
                  <dd>{row[header.toLowerCase()]}</dd>
                </>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}
