import { mockTransactions } from "../Data";
// import Title from "./Title";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../index.css";

export default function Transactions() {
  return (
    <div id="transaction-table">
      <>
        {/* <Title>Transactions</Title> */}
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>txId</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTransactions.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.txId}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    </div>
  );
}
