import { useState, useEffect } from "react";

import rest from "~/packages/rest";

export default () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    rest.Pizza.fetchPizzas().then(pizzas => {
      setPizzas(pizzas);
    });
  });

  return pizzas;
};
