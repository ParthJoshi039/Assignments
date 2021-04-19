using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Control_StructuresTesting
{
    public static class STD
    {
        static List<Student> student = new List<Student>()
        {
            new Student(){Id=1,Name="Parth",Percentage=99},
            new Student(){Id=2,Name="Parth",Percentage=98},
            new Student(){Id=3,Name="Parth",Percentage=97},
        };
        public static List<Student> GetAllStudent()
        {
            return student;
        }
        public static Student GetStudentById(int id)
        {
            Student std = student.Where(x => x.Id == id).FirstOrDefault();
            if(std == null)
            {
                throw new Exception("Not Found");
            }
            return std;
        }
        public static string GetStudentNameById(int id)
        {
            Student std = student.Where(x => x.Id == id).FirstOrDefault();
            return std.Name;
        }
        public static async Task<int> GetTotalStudent()
        {
            int c = 0;
            await Task.Run(() =>
            {
                c = GetAllStudent().Count();
            });
            return c;
        }
        public static async Task<Student> GetFirstRank()
        {
            Student std = new Student();
            await Task.Run(() =>
            {
                std = GetAllStudent().OrderByDescending(x => x.Percentage).FirstOrDefault();
            });
            return std;

        }
        public class Student
        {
            public int Id { get; set; }
            public String Name { get; set; }
            public decimal Percentage { get; set; }
        }
    }
}
