using APImemoteca.Domain;
using APImemoteca.Dto;
using APImemoteca.Services.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace APImemoteca.Controllers
{
    [ApiController]
    [Route("/quotes")]
    public class QuoteController: ControllerBase
    {
        private readonly IQuoteService _service;
        private readonly IMapper _mapper;

        public QuoteController(IQuoteService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> ListarQuotes()
        {
            try
            {
                var quotes = await _service.ListarQuotes();
                if (quotes.Count == 0) return NotFound("Nenhum pensamento registrado");
                return Ok(quotes);
            }
            catch (Exception e) { return BadRequest(e.Message); }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ListarQuotePorId(int id)
        {
            try
            {
                var quote = await _service.ListarQuotePorId(id);
                if (quote == null) return NotFound("pensamento não encontrado");
                return Ok(quote);
            }
            catch (Exception e) { return BadRequest(e.Message); }
        }

        [HttpPost]
        public async Task<IActionResult> AdicionarQuote([FromBody] QuoteDto quoteDto)
        {
            try
            {
                var quote = _mapper.Map<Quote>(quoteDto);
                var res = await _service.AdicionarQuote(quote);
                if(res) return Created("/quotes", new { mensagem = "Pensamento cadastrado com sucesso!" });
                return BadRequest("Erro inesperado ao inserir pensamento!");
            }
            catch (Exception e) { return BadRequest(e.Message); }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarQuote(int id, [FromBody]  QuoteDto quoteDto)
        {
            try
            {
                var quote = _mapper.Map<Quote>(quoteDto);
                quote.Id = id;
                var res = await _service.AtualizarQuote(quote);
                if (res) return Ok(new { mensagem = "Pensamento atualizado com sucesso!" });
                return BadRequest("Erro inesperado ao atualizar pensamento!");
            }
            catch (Exception e) { return BadRequest(e.Message); }
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> ApagarQuote(int id)
        {
            try
            {
                var res = await _service.ApagarQuote(id);
                if (res) return Ok(new { mensagem = "Pensamento apagado com sucesso!" });
                return BadRequest("Erro inesperado ao apagar pensamento!");
            }
            catch (Exception e) { return BadRequest(e.Message); }
        }

        [HttpGet("{pagina}/{quantidade}")]
        public async Task<IActionResult> RetornoPaginadoQuote( int pagina, int quantidade) { 
            try
            {
                var quotePaginado = await _service.RetornoPaginadoQuote(pagina, quantidade);
                if (quotePaginado.TotalRegistros == 0) return NotFound("pensamentos não encontrados");
                return Ok(quotePaginado.Listagem);
            }
            catch (Exception e) { return BadRequest(e.Message); }
        }
    }
}
