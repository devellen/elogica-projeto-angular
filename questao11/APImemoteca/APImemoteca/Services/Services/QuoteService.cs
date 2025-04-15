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

        public async Task<bool> AdicionarQuote(Quote quote)
        {
            try
            {
                return await _repository.AdicionarQuote(quote);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Quote> ListarQuotePorId(int id)
        {
            try
            {
                return await _repository.ListarQuotePorId(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<bool> AtualizarQuote(Quote quote)
        {
            try
            {
                return await _repository.AtualizarQuote(quote);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<bool> ApagarQuote(int id)
        {
            try
            {
                return await _repository.ApagarQuote(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<RetornoPaginado<Quote>> RetornoPaginadoQuote(int pagina, int quantidade)
        {
            try
            {
                return await _repository.RetornoPaginadoQuote(pagina, quantidade);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
