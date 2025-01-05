using Core.Entities;

namespace Core.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserById(string id);
        Task<IEnumerable<User>> GetAllUser();
        Task CreateUser(User user);
        Task UpdateUser(User user);
        Task DeleteUser(string id);
    }
}