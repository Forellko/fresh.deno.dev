import Navigation from '../components/Navigation.tsx';
import { Fragment } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import { IProduct } from '../utils/types.ts';
import ProductCard from '../components/ProductCard.tsx';

export const handler: Handlers<IProduct[] | null> = {
  async GET(_, ctx) {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = (await response.json()) as IProduct[];

    if (!products) {
      return ctx.render(products);
    }

    return ctx.render(products);
  },
};

export default function Home({ data: products }: PageProps<IProduct[] | null>) {
  if (!products) return <p>No products</p>;
  console.log(products);

  return (
    <Fragment>
      <Navigation />
      <div class="p-4 mx-auto max-w-screen-md mt-[50px]">
        <h1>hello</h1>

        <div>
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
