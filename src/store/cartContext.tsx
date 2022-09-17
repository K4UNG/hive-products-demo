import { createContext, ReactNode, useState } from "react";
import { CartItemType } from "../components/cart/CartList";

interface CartContextValue {
  addItem(item: CartItemType, amount: number): void;
  removeItem(id: number): void;
  decreaseItem(id: number): void;
  quantity: number;
  items: CartItemType[];
}

export const cartContext = createContext<CartContextValue>({
  items: [],
  quantity: 0,
  addItem() {},
  removeItem() {},
  decreaseItem() {},
});

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItemType[]>([]);

  console.log(items)

  function addItem(item: CartItemType, amount: number) {
    const result = items.find((i) => i.id === item.id);
    if (result) {
      setItems((prev) => {
        return prev.map((i) => {
          if (i.id === item.id) {
            i.quantity += amount;
          }
          return i;
        });
      });
    } else {
      setItems((prev) => [...prev, item]);
    }
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function decreaseItem(id: number) {
    const item = items.find((i) => i.id === id);
    if (item?.quantity === 1) {
      removeItem(id);
    } else {
      setItems((prev) => {
        return prev.map((i) => {
          if (i.id === id) {
            i.quantity--;
          }
          return i;
        });
      });
    }
  }

  const cartValue: CartContextValue = {
    addItem,
    removeItem,
    decreaseItem,
    quantity: items.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0),
    items,
  };

  return <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>;
};

export default CartProvider;
