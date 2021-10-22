import { categoriaDTO } from './../categorias/categoria';
export interface ArticuloCreacionDTO{
    id: number;
    titulo: string;
    contenido: string;
    etiquetas: string;
    fechaLanzamiento: Date;
    poster: File;
    articulosGratis: any;
    articulosPaga: any;
    categoriasIds: number[];
}

export interface ArticuloDTO{
    id: number;
    titulo: string;
    contenido: string;
    etiquetas: string;
    fechaLanzamiento: Date;
    poster: string;
    articulosGratis: any;
    articulosPaga: any;
    categorias: categoriaDTO[];
}

export interface ArticuloPostGet {
    categorias: categoriaDTO[];
}

export interface LandingPageDTO{
    articulosPaga: ArticuloDTO[];
    articulosGratis: ArticuloDTO[];
}

export interface ArticuloPutGet {
    articulo: ArticuloDTO;
    categoriasSeleccionadas: categoriaDTO[];
    categoriasNoSeleccionadas: categoriaDTO[];
}