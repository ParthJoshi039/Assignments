using System;
using System.Collections.Generic;

namespace Control_StructuresTesting
{
    public static class Operation
    {
        public static int SumOfnNumbers(int n)
        {
            int i = 1, sum = 0;

            while (i <= n)
            {
                sum += i;
                i++;
            }
            return sum;
        }
        public static int Max(int a, int b)
        {
            if(a > b)
            {
                return a;
            }
            else
            {
                return b;
            }
        }
        public static int Fact(int n)
        {   
            int fact = 1;

            for(int i=1;i<=n;i++)
            {
                fact = fact * i;
            }
            return fact;
        }
        public static float calc(int ch,int a,int b)
        {
            float ans;
            switch(ch)
            {
                case 1:
                    ans =  a + b;
                    break;
                case 2:
                    ans = a - b;
                    break;
                case 3:
                    ans = a * b;
                    break;
                case 4:
                    ans = a / b;
                    break;
                default:
                    ans = 0;
                    break;
            }
            return ans;
        }
        public static int Sum(List<int> numbers)
        {
            int sum = 0;

            foreach (int number in numbers)
            {
                sum += number;
            }
            return sum;
        }
        public static int Subtraction(int a, int b)
        {
            if (a < b)
            {
                throw new ArgumentException($"First Number {a} is less than second number {b}");
            }
            return a - b;
        }

    }
}
