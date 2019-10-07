using AutoMapper;
using books_app.Domain.Models;
using books_app.Mapping.Resources;

namespace books_app.Mapping
{
    public class ModelToResourceProfile : Profile
    {
        public ModelToResourceProfile()
        {
            CreateMap<User, UserDto>();
        }
    }
}