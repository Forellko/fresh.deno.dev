import Navigation from '../components/Navigation.tsx';
import { Fragment } from 'preact';

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <div class="p-4 mx-auto max-w-screen-md">
        <h1>hello</h1>
      </div>
    </Fragment>
  );
}
