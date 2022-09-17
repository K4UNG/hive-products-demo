import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import { useEffect, useState, useContext } from "react";
import { authContext } from "../../store/authContext";

interface Product {
  amount: number;
  category: { id: number; name: string };
  description: string;
  id: number;
  image: string;
  name: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [maxPage, setMaxPage] = useState(0);

  const { token } = useContext(authContext);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://assessment-api.hivestage.com/api/products?page=${page}&size=6`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setProducts(data.content);
        setMaxPage(data.totalPages);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [page, token]);

  function changePage(page: number) {
    setPage(page);
    window.scrollTo(0, 0);
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Products Page {page + 1}</h1>

      <div className={styles.list}>
        {loading && <div className={styles.status}>Loading...</div>}
        {!loading && products.length === 0 && (
          <div className={styles.status}>No items found.</div>
        )}
        {products.map((p) => (
          <ProductItem
            name={p.name}
            description={p.description}
            amount={p.amount}
            image={p.image}
            id={p.id}
            key={p.id}
            category={p.category.name}
          />
        ))}
      </div>

      <div className={styles.paginator}>
        {Array(maxPage)
          .fill(0)
          .map((_, i) => {
            return (
              <button
                className={`${styles.button} ${i === page && styles.active}`}
                onClick={() => changePage(i)}
                key={i}
              >
                {i + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
