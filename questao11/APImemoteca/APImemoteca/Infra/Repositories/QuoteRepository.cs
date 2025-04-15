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
    }
}
