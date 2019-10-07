using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using books_app.Domain.Repositories;

namespace books_app.Presistence.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly AppDbContext AppDbContext;
        private readonly DbSet<TEntity> _entity;

        public Repository(AppDbContext _appDbContext)
        {
            AppDbContext = _appDbContext;
            _entity = AppDbContext.Set<TEntity>();
        }


        public virtual async Task<TEntity> GetAsync(int id)
        {
            return await _entity.FindAsync(id);
        }

        public virtual async Task<IEnumerable<TEntity>> GetAllAsync()
        {

            return await _entity.ToListAsync();
        }

        public virtual async Task<IEnumerable<TEntity>> GetAllAsync(int page, int pageSize)
        {

            return await _entity.Take(pageSize).Skip((page - 1) * pageSize).ToListAsync();
        }

        public virtual async Task<IEnumerable<TEntity>> FindAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await _entity.Where(predicate).ToListAsync();
        }

        public virtual async Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await _entity.SingleOrDefaultAsync(predicate);

        }

        public virtual async Task AddAsync(TEntity entity)
        {
            await _entity.AddAsync(entity);
        }

        public virtual async Task AddRangeAsync(IEnumerable<TEntity> entities)
        {
            await _entity.AddRangeAsync(entities);
        }

        public virtual void Remove(TEntity entity)
        {
            _entity.Remove(entity);
        }

        public virtual void RemoveRange(IEnumerable<TEntity> entities)
        {
            _entity.RemoveRange(entities);
        }

        public virtual async Task SaveAsync()
        {
            await AppDbContext.SaveChangesAsync();

        }

        public virtual async Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await _entity.FirstOrDefaultAsync(predicate);
        }
    }
}