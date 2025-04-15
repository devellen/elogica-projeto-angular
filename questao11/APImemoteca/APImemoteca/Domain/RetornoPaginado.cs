﻿namespace APImemoteca.Domain
{
    public class RetornoPaginado<T> where T : class
    {
        public int TotalRegistros { get; set; }
        public int Pagina { get; set; }
        public int QtdPagina { get; set; }
        public List<T> Listagem { get; set; }
    }
}
