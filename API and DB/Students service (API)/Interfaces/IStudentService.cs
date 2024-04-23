using Students_service__API_.Models;

namespace Students_service__API_.Interfaces
{
    public interface IStudentService
    {
        public Task<List<StudentModel>> GetAllStudents();
        public Task<StudentModel> GetStudentById(int personal_number);
        public Task AddStudent(StudentModel studentModel);
        public Task EditStudent(int id, StudentModel studentModel);
        public Task DeleteStudent(int id);
    }
}
