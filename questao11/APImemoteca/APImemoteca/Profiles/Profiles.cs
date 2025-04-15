using APImemoteca.Domain;
using APImemoteca.Dto;
using AutoMapper;

namespace APImemoteca.Profiles
{
    public class Profiles : Profile
    {
        public Profiles() {
            CreateMap<QuoteDto, Quote>();
        }
    }
}
