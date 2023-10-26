import React from "react";
import { StoreContext } from "../providers";

const useStore = () => {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error(
      "useStore must be used within a StoreProvider"
    );
  }
  return context;
}

export { useStore };