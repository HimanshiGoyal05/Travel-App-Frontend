import { createContext, useContext, useState } from "react";

const initialValue = {
  open: false,
  message: "",
  type: "success",
};

const AlertContext = createContext(initialValue);

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialValue);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => useContext(AlertContext);

export { useAlert, AlertProvider };
