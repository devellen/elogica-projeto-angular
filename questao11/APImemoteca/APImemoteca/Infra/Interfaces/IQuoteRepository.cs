using APImemoteca.Domain;

namespace APImemoteca.Infra.Interfaces
{
    public interface IQuoteRepository
    {
        Task<List<Quote>> ListarQuotes();
        Task<Quote> ListarQuotePorId(int id);
        Task<bool> AdicionarQuote(Quote quote);
        Task<bool> AtualizarQuote(Quote quote);
    }
}
