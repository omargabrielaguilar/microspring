using Core.Entities;
using Core.Interfaces;
using MongoDB.Driver;

namespace Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _usersCollection;

        public UserRepository(IMongoClient mongoClient, string databaseName)
        {
            var database = mongoClient.GetDatabase(databaseName);
            _usersCollection = database.GetCollection<User>("Users");
        }

        public async Task<User> GetUserById(string id)
        {
            return await _usersCollection.Find(user => user.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _usersCollection.Find(user => true).ToListAsync();
        }

        public async Task CreateUser(User user)
        {
            await _usersCollection.InsertOneAsync(user);
        }

        public async Task UpdateUser(User user)
        {
            await _usersCollection.ReplaceOneAsync(u => u.Id == user.Id, user);
        }

        public async Task DeleteUser(string id)
        {
            await _usersCollection.DeleteOneAsync(user => user.Id == id);
        }
    }
}
