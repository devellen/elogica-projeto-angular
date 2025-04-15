using APImemoteca.Domain;

namespace APImemoteca.Services.Interfaces
{
    public interface IQuoteService
    {
        Task<List<Quote>> ListarQuotes();
        Task<Quote> ListarQuotePorId(int id);
        Task<bool> AdicionarQuote(Quote quote);
        Task<bool> AtualizarQuote(Quote quote);
    }
}
