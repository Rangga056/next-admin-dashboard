import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import noavatar from "@/public/assets/images/noavatar.png";
import { format } from "date-fns";
import Image from "next/image";
import Charts from "./Charts";

const Transactions = () => {
  const today = format(new Date(), "dd.MM.yyyy");
  return (
    <div className="w-full bg-slate-900 p-3 rounded-lg">
      {/* Title */}
      <h2 className="text-xl font-medium p-2">Latest Transactions</h2>
      {/* Table */}
      <Table className="w-[95%] mx-auto mt-3">
        <TableCaption>A list of your recent transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <Image src={noavatar} alt="avatar" width={30} height={30} />
              John Doe
            </TableCell>
            <TableCell>
              <span className="p-2 bg-yellow-600 rounded-lg text-white font-medium">
                pending
              </span>
            </TableCell>
            <TableCell>{today}</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <Image src={noavatar} alt="avatar" width={30} height={30} />
              John Doe
            </TableCell>
            <TableCell>
              <span className="p-2 bg-yellow-600 rounded-lg text-white font-medium">
                pending
              </span>
            </TableCell>
            <TableCell>{today}</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <Image src={noavatar} alt="avatar" width={30} height={30} />
              John Doe
            </TableCell>
            <TableCell>
              <span className="p-2 bg-yellow-600 rounded-lg text-white font-medium">
                pending
              </span>
            </TableCell>
            <TableCell>{today}</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* Charts */}
      <Charts />
    </div>
  );
};

export default Transactions;
