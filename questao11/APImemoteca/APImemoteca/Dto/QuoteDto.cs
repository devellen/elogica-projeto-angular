using System.ComponentModel.DataAnnotations;

namespace APImemoteca.Dto
{
    public class QuoteDto
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "O pensamento é obrigatorio")] 
        [StringLength(300, ErrorMessage = "o nome não pode ultrapassar 300 caracteres")]
        public string Pensamento { get; set; }
        public int Modelo { get; set; }
        public string Autor { get; set; }
    }
}
