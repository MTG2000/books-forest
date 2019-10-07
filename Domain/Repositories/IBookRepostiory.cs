using System.Collections.Generic;
using System.Threading.Tasks;
using books_app.Domain.Models;

namespace books_app.Domain.Repositories
{
    public interface IBookRepository : IRepository<Book>
    {
        Task<string> AddBookAsync(Book book, int[] tagsIds);

        // Task<IEnumerable<Book>> GetAllAsync();

    }
}