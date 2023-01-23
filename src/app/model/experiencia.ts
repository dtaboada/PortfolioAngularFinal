
export class experiencia{
    id?: number;
    puesto: string;
    empresa: string;
    anioInicio: string;
    anioFin: string;
    descripcion: string;
    logo: any;
     


constructor( puesto: string, empresa: string, anioInicio: string, anioFin: string, descripcion: string,logo:any){
          
            this.puesto=puesto;
            this.empresa=empresa;
            this.anioInicio=anioInicio;
            this.anioFin=anioFin;
            this.descripcion=descripcion;
            this.logo=logo;
            
    }
}



