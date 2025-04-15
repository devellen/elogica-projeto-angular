using System.Data;
using APImemoteca.Domain;
using APImemoteca.Infra.Interfaces;
using Dapper;

namespace APImemoteca.Infra.Repositories
{
    public class QuoteRepository: IQuoteRepository
    {
        private readonly IDbConnection _connection;

        public QuoteRepository(IDbConnection connection)
        {
            _connection = connection;
        }

        public async Task<List<Quote>> ListarQuotes()
        {
            try
            {
                string sql = $"SELECT * FROM REGISTRO_PENSAMENTO;";
                var quotes = await _connection.QueryAsync<Quote>(sql);
                return quotes.ToList();
            }
            catch (Exception e) { throw e; }
        }

        public async Task<Quote> ListarQuotePorId(int id)
        {
            try
            {
                string sql = $"SELECT * FROM REGISTRO_PENSAMENTO WHERE ID = {id}";
                var quote = await _connection.QueryFirstOrDefaultAsync<Quote>(sql);
                return quote; 
            }
            catch (Exception e) { throw e; }
        }

        public async Task<bool> AdicionarQuote(Quote quote)
        {
            try
            {
                string sql = $"INSERT INTO REGISTRO_PENSAMENTO VALUES (@PENSAMENTO, @MODELO, @AUTOR)";
                var param = new
                {
                    PENSAMENTO = quote.Pensamento,
                    MODELO = quote.Modelo,
                    AUTOR = quote.Autor
                };
                var res = await _connection.ExecuteAsync(sql, param);
                return res > 0 ? true : false;
            }
            catch (Exception e) { throw e; }
        }

        public async Task<bool> AtualizarQuote(Quote quote)
        {
            try
            {
                string sql = $"UPDATE REGISTRO_PENSAMENTO SET PENSAMENTO = @PENSAMENTO, MODELO = @MODELO, AUTOR = @AUTOR WHERE ID = @ID";
                var param = new
                {
                    PENSAMENTO = quote.Pensamento,
                    MODELO = quote.Modelo,
                    AUTOR = quote.Autor,
                    ID = quote.Id
                };
                var res = await _connection.ExecuteAsync(sql, param);
                return res > 0 ? true : false;
            }
            catch (Exception e) { throw e; }
        }

        public async Task<bool> ApagarQuote(int id)
        {
            try
            {
                string sql = $"DELETE FROM REGISTRO_PENSAMENTO WHERE ID = {id}";
                var res = await _connection.ExecuteAsync(sql);
                return res > 0 ? true : false;
            }
            catch (Exception e) { throw e; }
        }

        public async Task<RetornoPaginado<Quote>> RetornoPaginadoQuote(int pagina, int quantidade)
        {
            try
            {
                string sql = $"SELECT * FROM REGISTRO_PENSAMENTO ORDER BY ID OFFSET @OFFSET ROWS FETCH NEXT @FETCHNEXT ROWS ONLY";
                var parametros = new
                {
                    OFFSET = (pagina - 1) * quantidade,
                    FETCHNEXT = quantidade
                };
                var quotes = await _connection.QueryAsync<Quote>(sql, parametros);

                string sqlQtdQuote = $"SELECT COUNT(*) FROM REGISTRO_PENSAMENTO";
                var qtdQuotes = await _connection.QueryFirstOrDefaultAsync<int>(sqlQtdQuote);

                return new RetornoPaginado<Quote>
                {
                    Pagina = pagina,
                    QtdPagina = quantidade,
                    TotalRegistros = qtdQuotes,
                    Listagem = quotes.ToList()
                };
            }
            catch (Exception e) { throw e; }
        } 
    }
}
