//Un tipo descibe la forma de un dato
export type Category = "monitors" | "GPU" | "audio" | "peripherals";

//Una interfaz es como un contrato por los valores que debe tener y el tipo. Typesript firma el contrato.. y si se rompe.. se queja
//Los elementos de una interface van separados por ; o enter
export interface Product {

  id: number;
  name: string;
  price: number;  //precio en euros sin IVA
  category: Category;
  stock: number;

}
