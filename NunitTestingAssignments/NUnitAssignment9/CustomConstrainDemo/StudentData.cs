using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using static CustomConstrainDemo.STD;

namespace CustomConstrainDemo
{
    public class StudentData
    {
        STD _std;
        public StudentData(STD std)
        {
            _std = std;
        }
        public List<Student> GetAllStudent()
        {
            return _std.GetAllStudent();
        }
        public Student GetFirstRank()
        {
            return _std.GetFirstRank();
        }
        public int GetTotalStudent()
        {
            return _std.GetTotalStudent();
        }
        public int GetTotalStudentByBranch(string branch)
        {
            int res = _std.GetStudentsByBranch(branch).Count();
            return res;
        }
    }
}
