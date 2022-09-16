import { useParams } from 'react-router-dom';
import ProductDetail from '../components/products/Product';

const Product: React.FC = () => {
    const { id } = useParams();
    return <main>
        <ProductDetail />
    </main>
}

export default Product;