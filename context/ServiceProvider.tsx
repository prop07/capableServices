'use client'
import { createContext, useState, useEffect } from "react";

//firebase
import { database } from "../config/app";
import { ref, onValue } from "firebase/database";

export const ServiceContext = createContext({});

const ServiceProvider = ({ children }) => {
  const [serviceDetails, setServiceDetails] = useState({});

  useEffect(() => {
      const fetchData = async () => {
            try {
              const reference = ref(database, "services/");
              onValue(reference, (snapshot) => {
                const data = snapshot.val();
                setServiceDetails(data);
                console.log( data)
                
              });
            } catch (error) {
              console.error("Error fetching order data:", error);
            }
          };
          fetchData();
  }, []);

  return (
    <ServiceContext.Provider value={serviceDetails}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;