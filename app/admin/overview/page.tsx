import { BadgeDollarSign, Barcode, CreditCard, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency, formatDateTime, formatNumber } from '@/lib/utils';

import Charts from './charts';
import Link from 'next/link';
import { Metadata } from 'next';
import { auth } from '@/auth';
import { getOrderSummary } from '@/lib/actions/order.actions';
import { getUserRole } from '@/lib/actions/user.actions';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
};


const NUMBER_FORMATTER = new Intl.NumberFormat('en-US');
function formatLocalNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}

const AdminOverviewPage = async () => {
  const session = await auth();

  const user = session?.user?.id ? await getUserRole(session.user.id) : null;

  if (user?.role !== 'admin') throw new Error('admin permission required');

  const summary = await getOrderSummary();

  return (
    <div className="px-2">
      <div className="space-y-2 bg-gray-200 rounded-2xl container mx-auto py-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <BadgeDollarSign />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatCurrency(summary.totalSales._sum.totalPrice!.toString())}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatLocalNumber(summary.orderCount)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summary.usersCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Barcode />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summary.productsCount}</div>
            </CardContent>
          </Card>
        </div>
        <div className="flex gap-2 flex-col md:flex-row justify-evenly mx-2">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Charts
                data={{
                  salesData: summary.salesData,
                }}
              />
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>BUYER</TableHead>
                    <TableHead>DATE</TableHead>
                    <TableHead>TOTAL</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {summary.latestSales.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        {order.user?.name ? order.user.name : 'Deleted user'}
                      </TableCell>
                      <TableCell>
                        {formatDateTime(order.createdAt).dateOnly}
                      </TableCell>
                      <TableCell>
                        {formatCurrency(order.totalPrice.toString())}
                      </TableCell>
                      <TableCell>
                        <Link href={`/order/${order.id}`}>
                          <span className="px-2">Details</span>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
