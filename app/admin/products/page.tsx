import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { deleteProduct, getAllProducts } from '@/lib/actions/product.actions';
import { formatCurrency, formatId } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import DeleteDialog from '@/components/shared/delete-dialog';
import Link from 'next/link';
import Pagination from '@/components/shared/pagination';

const AdminProductsPage = async (props: {
  searchParams: Promise<{
    page: string;
    query: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const searchText = searchParams.query || '';

  const products = await getAllProducts({
    animalType: searchText,
    page,
  });

  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Products</h1>
          {searchText && (
            <div>
              Filtered By: <i>{searchText}</i>
              <Link href="/admin/products">
                <Button className="ml-2" variant="outline" size="sm">
                  Remove Filter
                </Button>
              </Link>
            </div>
          )}
        </div>
        <Button asChild variant="default">
          <Link href="/admin/products/create">Create Product</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>ANIMAL</TableHead>
            <TableHead>STOCK</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.data.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{formatId(product.id)}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{formatCurrency(Number(product.price))}</TableCell>
              <TableCell>{product.animalType}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{Number(product.price)}</TableCell>
              <TableCell>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/admin/products/${product.id}`}>Edit</Link>
                </Button>
                <DeleteDialog id={product.id} action={deleteProduct} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {products?.totalPages && products.totalPages > 1 && (
        <Pagination totalPages={products.totalPages} page={page} />
      )}
    </div>
  );
};

export default AdminProductsPage;
