using System.Threading.Tasks;
using books_app.Domain.Models;
using books_app.Domain.Repositories;
using books_app.Services;

namespace books_app.Presistence.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly IAuthService auth;

        public UserRepository(AppDbContext _appDbContext, IAuthService _auth) : base(_appDbContext)
        {
            auth = _auth;
        }

        public async Task<string> LoginUser(User user)
        {
            var userToFind = await SingleOrDefaultAsync(u => ((u.Name == user.Name) && (u.Password == user.Password)));
            if (userToFind == null) return null;
            var token = auth.GenerateToken(userToFind.Id.ToString(), userToFind.IsAdmin);    //We should instead store isAdmin In the Database
            return token;
        }

        public async Task<string> RegisterUser(User user)
        {
            var userExist = await SingleOrDefaultAsync(u => u.Name == user.Name);
            if (userExist != null) return null;
            await AddAsync(user);
            await SaveAsync();
            return user.Id.ToString();
        }
    }
}