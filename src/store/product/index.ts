import { create } from 'zustand';

type State = {
  idrExchange: number;
};

const productStore = create<State>(() => ({
  idrExchange: 15619,
}));

export { productStore };
