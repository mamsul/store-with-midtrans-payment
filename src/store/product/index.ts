import { ICartProduct, IProduct } from '@/types/models';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UpdateProductCountProps = {
  id: number;
  type: 'dec' | 'inc';
};

type State = {
  idrExchange: number;
  carts: ICartProduct[] | [];
  addToCart: (product: IProduct) => void;
  updateProductCount: ({ id, type }: UpdateProductCountProps) => void;
  removeProductCart: (id: number) => void;
  getSubtotalProductCart: () => number;
  getTotalItemsProductCart: () => number;
};

const productStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        idrExchange: 15619,
        carts: [],

        // === Menambah product ke cart ===
        addToCart: (product) => {
          const currCarts = get().carts;

          const existingProduct = currCarts.find(
            (cartProduct) => cartProduct.id === product.id,
          );

          if (existingProduct) {
            // Jika product sudah ada maka update count nya saja
            const updatedCarts = currCarts.map((cartProduct) =>
              cartProduct.id === product.id
                ? { ...cartProduct, count: cartProduct.count + 1 }
                : cartProduct,
            );

            set({ carts: updatedCarts });
          } else {
            // Jika belum ada maka tambah baru
            const newData: ICartProduct = {
              ...product,
              count: 1,
              status: 'pending',
            };

            set({ carts: [...currCarts, newData] });
          }
        },

        // === Update count product di carts ===
        updateProductCount({ id, type }) {
          const currCarts = get().carts;

          function countCalc(currCount: number): number {
            if (type === 'inc') {
              return currCount + 1;
            } else if (type === 'dec' && currCount > 1) {
              return currCount - 1;
            }
            return currCount;
          }

          const updatedCarts = currCarts.map((item) =>
            item.id === id ? { ...item, count: countCalc(item.count) } : item,
          );

          set({ carts: updatedCarts });
        },

        // === Menghapus product dari carts ===
        removeProductCart(id) {
          const currCarts = get().carts;
          const updatedCarts = currCarts.filter((item) => item.id !== id);

          if (updatedCarts.length !== currCarts.length) {
            set({ carts: updatedCarts });
          } else {
            console.log('Produk tidak ditemukan dalam keranjang.');
          }
        },

        // === Menghitung nilai subtotal dari setiap product cart ===
        getSubtotalProductCart() {
          const carts = get().carts;
          const subtotal = carts?.reduce((acc, product) => {
            return acc + parseFloat(product.price) * product.count;
          }, 0);
          return subtotal ?? 0;
        },

        // === Menghitung total item dari setiap product di cart ===
        getTotalItemsProductCart() {
          const carts = get().carts;
          const totalItems = carts?.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.count;
          }, 0);
          return totalItems ?? 0;
        },
      }),
      { name: 'productStore' },
    ),
  ),
);

export { productStore };
