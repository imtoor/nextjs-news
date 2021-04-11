import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => (
<Layout title="Welcome">
<Link href="/about">
<a>About</a>
</Link>
<p>Welcome to the page</p>
</Layout>
)

export default Index;