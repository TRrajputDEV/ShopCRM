import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <>
      yoo this is my webpage and here it is.
      <Link href="/users"> Users</Link>
      <ProductCard/ >
    </>
  );
}
