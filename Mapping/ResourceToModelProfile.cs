using AutoMapper;
using books_app.Domain.Models;
using books_app.Mapping.Resources;

namespace books_app.Mapping
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<UserDtoRequest, User>();
            CreateMap<BookDtoRequest, Book>();

        }
    }
}