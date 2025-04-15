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
    }
}
