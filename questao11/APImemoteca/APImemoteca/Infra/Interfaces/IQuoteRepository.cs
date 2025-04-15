using APImemoteca.Domain;

namespace APImemoteca.Infra.Interfaces
{
    public interface IQuoteRepository
    {
        Task<List<Quote>> ListarQuotes();
    }
}
