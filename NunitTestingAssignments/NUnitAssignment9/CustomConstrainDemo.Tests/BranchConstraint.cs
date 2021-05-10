using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework.Constraints;
using static CustomConstrainDemo.STD;

namespace CustomConstrainDemo.Tests
{
    public class BranchConstraint : NUnit.Framework.Constraints.Constraint
    {
        readonly string _branch;
        public BranchConstraint(string branch)
        {
            _branch = branch;
        }

        public override ConstraintResult ApplyTo<TActual>(TActual actual)
        {
            List<Student> students = actual as List<Student>;
            foreach (Student s in students)
            {
                if (s.Branch != _branch)
                {
                    return new ConstraintResult(this, actual, ConstraintStatus.Error);
                }
            }
            return new ConstraintResult(this, actual, ConstraintStatus.Success);
        }
        public class Is : Is
        {
            public static BranchConstraint checkBranch(string branch)
            {
                return new BranchConstraint(branch);
            }
        }
    }
}
