import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { deleteOrder, getAllOrders } from '@/lib/actions/order.actions';
import { formatCurrency, formatDateTime, formatId } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import DeleteDialog from '@/components/shared/delete-dialog';
import Link from 'next/link';
import { Metadata } from 'next';
import Pagination from '@/components/shared/pagination';
import { auth } from '@/auth';
import { getUserRole } from '@/lib/actions/user.actions';

export const metadata: Metadata = {
  title: 'Admin Orders',
};

const OrdersPage = async (props: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page = '1' } = await props.searchParams;

  const session = await auth();
  const user = session?.user?.id ? await getUserRole(session.user.id) : null;
  if (user?.role !== 'admin') throw new Error('admin permission required');

  const orders = await getAllOrders({
    page: Number(page),
    query: 'all',
  });

  return (
    <div className="flex justify-center p-2">
      <div className="bg-white container min-h-screen rounded-2xl p-4">
        <div className="space-y-2">
          <h2 className="h2-bold">Orders</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>DATE</TableHead>
                  <TableHead>TOTAL</TableHead>
                  <TableHead>PAID</TableHead>
                  <TableHead>DELIVERED</TableHead>
                  <TableHead>ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.data.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{formatId(order.id)}</TableCell>
                    <TableCell>
                      {formatDateTime(order.createdAt).dateTime}
                    </TableCell>
                    <TableCell>
                      {formatCurrency(order.totalPrice.toString())}
                    </TableCell>
                    <TableCell>
                      {order.isPaid && order.paidAt
                        ? formatDateTime(order.paidAt).dateTime
                        : 'Not Paid'}
                    </TableCell>
                    <TableCell>
                      {order.isDelivered && order.deliveredAt
                        ? formatDateTime(order.deliveredAt).dateTime
                        : 'Not Delivered'}
                    </TableCell>
                    <TableCell className="flex gap-1">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/order/${order.id}`}>Details</Link>
                      </Button>
                      <DeleteDialog id={order.id} action={deleteOrder} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {orders.totalPages > 1 && (
              <Pagination
                page={Number(page) || 1}
                totalPages={orders?.totalPages}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
