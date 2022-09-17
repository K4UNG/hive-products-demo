import { createContext, ReactNode, useState, useEffect } from "react";
import { CartItemType } from "../components/cart/CartList";

interface CartContextValue {
  addItem(item: CartItemType, amount: number): void;
  removeItem(id: number): void;
  decreaseItem(id: number): void;
  increaseItem(id: number): void;
  clearCart(): void;
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
  clearCart() {},
  total: 0,
});

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItemType[]>([]);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    const items = localStorage.getItem('cart') || '[]';
    setItems(JSON.parse(items));
  }, [])

  useEffect(() => {
    if (first) {
        setFirst(false);
        return;
    }
    updateLS(items)
  }, [items, first])

  function updateLS(items: CartItemType[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  function addItem(item: CartItemType, amount: number) {
    const result = items.find((i) => i.id === item.id);
    if (result) {
      setItems((prev) => {
        return prev.map((i) => {
          if (i.id === item.id) {
            return {...i, quantity: i.quantity + amount}
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

  function clearCart() {
    setItems([])
  }

  const cartValue: CartContextValue = {
    addItem,
    removeItem,
    decreaseItem,
    increaseItem,
    clearCart,
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
