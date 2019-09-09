export class Client {
    constructor(
        public CODCLIENTE : number,
        public CODCONTABILIDAD: number,
        public NOMBRE: string,
        public DIRECCION: string,
        public TELEFONO: number,
        public LATITUD: number,
        public LONGITUD: number,
        public DESCATALOGADO: boolean
    ) { }
}