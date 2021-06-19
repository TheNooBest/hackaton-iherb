import { Product } from "./entities";

export interface ProductAndCount extends Product {
    count: number;
}
