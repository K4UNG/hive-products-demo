import { createContext, ReactNode, useState } from "react";
import { CartItemType } from "../components/cart/CartList";

interface CartContextValue {
  addItem(item: CartItemType, amount: number): void;
  removeItem(id: number): void;
  decreaseItem(id: number): void;
  increaseItem(id: number): void;
  quantity: number;
  items: CartItemType[];
  total: number;
}

export const cartContext = createContext<CartContextValue>({
  items: [],
  quantity: 0,
  addItem() {},
  removeItem() {},
  decreaseItem() {},
  increaseItem() {},
  total: 0,
});

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItemType[]>([]);

  function addItem(item: CartItemType, amount: number) {
    const result = items.find((i) => i.id === item.id);
    if (result) {
      setItems((prev) => {
        return prev.map((i) => {
          if (i.id === item.id) {
            return {...item, quantity: item.quantity + amount}
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

  function increaseItem(id: number) {
    setItems(prev => {
        return prev.map(item => {
            if (item.id === id) {
                return {...item, quantity: item.quantity + 1}
            }
            return item
        })
    })
  }

  function decreaseItem(id: number) {
    const item = items.find((i) => i.id === id);
    if (item?.quantity === 1) {
      removeItem(id);
    } else {
      setItems((prev) => {
        return prev.map((i) => {
          if (i.id === id) {
            return {...i, quantity: i.quantity - 1}
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
    increaseItem,
    quantity: items.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0),
    items,
    total: items.reduce((sum, item) => {
      return sum + item.amount * item.quantity;
    }, 0),
  };

  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  );
};

export default CartProvider;
