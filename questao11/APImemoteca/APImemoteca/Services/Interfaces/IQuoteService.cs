using APImemoteca.Domain;

namespace APImemoteca.Services.Interfaces
{
    public interface IQuoteService
    {
        Task<List<Quote>> ListarQuotes();
        Task<bool> AdicionarQuote(Quote quote);
    }
}
