
export class educacion{
 
    id?: number;
    titulo: String;
    institucion: String;
    anioInicio: String;
    anioFin: String;
    descripcion: String;
    logo: any;
     


constructor( titulo: String, institucion: String, anioInicio: String, anioFin: String, descripcion: String,logo:any){
          
            this.titulo=titulo;
            this.institucion=institucion;
            this.anioInicio=anioInicio;
            this.anioFin=anioFin;
            this.descripcion=descripcion;
            this.logo=logo;
            
    }
}