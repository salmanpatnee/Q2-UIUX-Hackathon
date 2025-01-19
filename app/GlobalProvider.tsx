import { CartProvider } from "@/context/cartContext";

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};
