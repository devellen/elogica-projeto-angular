using APImemoteca.Domain;
using APImemoteca.Infra.Interfaces;
using APImemoteca.Services.Interfaces;

namespace APImemoteca.Services.Services
{
    public class QuoteService : IQuoteService
    {
        private readonly IQuoteRepository _repository;

        public QuoteService(IQuoteRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<Quote>> ListarQuotes()
        {
            try
            {
                return await _repository.ListarQuotes();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
