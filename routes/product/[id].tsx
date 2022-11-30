import Navigation from '../../components/Navigation.tsx';
import { Fragment } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import { IProduct } from '../../utils/types.ts';

export const handler: Handlers<IProduct | null> = {
  async GET(_, ctx) {
    const response = await fetch(
      `https://fakestoreapi.com/products/${ctx.params.id}`
    );
    const product = (await response.json()) as IProduct;

    if (!product) {
      return ctx.render(product);
    }

    return ctx.render(product);
  },
};

export default function Home({ data: product }: PageProps<IProduct | null>) {
  if (!product) return <p>Product not found</p>;

  return (
    <Fragment>
      <Navigation />
      <div class="p-4 mx-auto max-w-screen-md mt-[50px]">
        <div>
          <h1 class="font-bold text-2xl">{product.title}</h1>
          <img src={product.image} alt="product" class="w-1/3"></img>
        </div>
      </div>
    </Fragment>
  );
}
