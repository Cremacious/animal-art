import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency, formatDateTime, formatId } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';
import Pagination from '@/components/shared/pagination';
import { getMyOrders } from '@/lib/actions/order.actions';

export const metadata: Metadata = {
  title: 'My Orders',
};

const OrdersPage = async (props: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await props.searchParams;
  const orders = await getMyOrders({
    page: Number(page) || 1,
  });
  const { totalPages } = orders;

  const onClick = (btnType: string) => {
    const pageValue = btnType === 'next' ? Number(page) + 1 : Number(page) - 1;
   
    return (
      <div className="flex gap-2">
        <Button
          size="lg"
          variant="outline"
          className="w-28"
          onClick={() => onClick('prev')}
          disabled={Number(page) <= 1}
        >
          Previous
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-28"
          onClick={() => onClick('next')}
          disabled={Number(page) >= totalPages}
        >
          Next
        </Button>
      </div>
    );
  };

  return (
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
                  {' '}
                  {formatCurrency(Number(order.totalPrice))}
                </TableCell>
                <TableCell>
                  {formatCurrency(Number(order.totalPrice))}
                </TableCell>
                <TableCell>
                  {order.isPaid && order.paidAt
                    ? formatDateTime(order.paidAt).dateTime
                    : 'not paid'}
                </TableCell>
                <TableCell>
                  {order.isDelivered && order.deliveredAt
                    ? formatDateTime(order.deliveredAt).dateTime
                    : 'not delivered'}
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
        {orders.totalPages > 1 && (
          <Pagination
            page={Number(page) || 1}
            totalPages={orders?.totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
