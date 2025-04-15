using APImemoteca.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace APImemoteca.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuoteController: ControllerBase
    {
        private readonly IQuoteService _service;

        public QuoteController(IQuoteService service)
        {
            _service = service;
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
    }
}
