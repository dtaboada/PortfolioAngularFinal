
export class experiencia{
    id?: Number;
    puesto: string;
    empresa: string;
    anioInicio: string;
    anioFin: string;
    descripcion: string;
    logo: string;
     


constructor( puesto: string, empresa: string, anioInicio: string, anioFin: string, descripcion: string,logo:string){
          
            this.puesto=puesto;
            this.empresa=empresa;
            this.anioInicio=anioInicio;
            this.anioFin=anioFin;
            this.descripcion=descripcion;
            this.logo=logo;
            
    }
}



