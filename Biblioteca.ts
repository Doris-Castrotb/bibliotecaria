import{ autor }from "./autor"
import { Copia } from "./copia"
import { lector } from "./lector"
import { libro } from "./libro"


const Dorisyr=new autor( "Doris", "Tierra blanca",29_10_2006)

console.log(Dorisyr);


const Quimica=new libro("biologia","matematicas","obejtos","mvimiento nranja 7465",1999)
console.log(Quimica);


const Dorisyaritzi=new lector(1543,"Doris ",2741072833,"calle 5 de mayo colonia hoja del maiz",74362537)
console.log(Dorisyaritzi);


const aristoteles= new libro("Grecia","etica nicomaquea","del alma","gran moral",332)
console.log(aristoteles);
