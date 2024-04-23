using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Students_service__API_.Interfaces;
using Students_service__API_.Models;

namespace Students_service__API_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;

        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var values = await _studentService.GetAllStudents();
            return Ok(values);
        }

        [HttpGet("{personal_number}")]
        public async Task<IActionResult> Get(int personal_number)
        {
            try
            {
                var student = await _studentService.GetStudentById(personal_number);
                return Ok(student);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] StudentModel studentModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _studentService.AddStudent(studentModel);
            return CreatedAtAction(nameof(Get), new { id = studentModel.Personal_Number }, studentModel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] StudentModel studentModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                await _studentService.EditStudent(id, studentModel);
                return NoContent();
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _studentService.DeleteStudent(id);
                return NoContent();
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
        }
    }
}
