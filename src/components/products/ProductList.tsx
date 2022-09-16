import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

const products = [
  {
    amount: 100,
    category: {
      id: 1,
      name: "Accessories",
    },
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    id: 1729,
    image:
      "https://beehive-images.hivestage.com/medium/JQ5lkZENDIZFoqbb3oiqpz05OY1Cu64KvDAwKGVW.png",
    name: "Mouse",
  },
  {
    amount: 100,
    category: {
      id: 1,
      name: "Accessories",
    },
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    id: 1728,
    image:
      "https://beehive-images.hivestage.com/medium/JQ5lkZENDIZFoqbb3oiqpz05OY1Cu64KvDAwKGVW.png",
    name: "Mouse",
  },
  {
    amount: 100,
    category: {
      id: 1,
      name: "Accessories",
    },
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    id: 1727,
    image:
      "https://beehive-images.hivestage.com/medium/JQ5lkZENDIZFoqbb3oiqpz05OY1Cu64KvDAwKGVW.png",
    name: "Mouse",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Products Page 1</h1>

      <div className={styles.list}>
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
    </div>
  );
};

export default ProductList;
