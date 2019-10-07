using System.Threading.Tasks;
using books_app.Domain.Models;

namespace books_app.Domain.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<string> LoginUser(User user);

        Task<string> RegisterUser(User user);
    }
}