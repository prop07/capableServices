'use client'
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
//firebase
import { ref} from "firebase/database";
import { database } from "../../config/app";


const ServiceProvider = ({ children }) => {
  const [serviceDetails, setServiceDetails] = useState({});

  useEffect(() => {
      const fetchData = async () => {
            try {
              const userRef = ref(database, "services/");
              onValue(userRef, (snapshot) => {
                const data = snapshot.val();
                setServiceDetails(data);
                
              });
            } catch (error) {
              console.error("Error fetching order data:", error);
            }
          };
          fetchData();
          console.log(serviceDetails)
  }, []);

  return (
    <ProductContext.Provider value={serviceDetails}>
      {children}
    </ProductContext.Provider>
  );
};

export default ServiceProvider;