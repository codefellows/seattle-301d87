# Warm-Up Exercise

This code sample is written in C#. Read through the code and determine the output for the function.

```c#
public static string Value(string value, int position)
{
    string[] myArray = new string[5]; // define an array of string called myArray, instantiate with a 5 index positions

    if (position >= myArray.Length)
    {
        return "Not a valid index";
    }

    for (int i = 0; i < myArray.Length; i++)
    {
        if (i == position)
        {
            myArray[position] = value;
        }
    }
    return $"Your value of {value} was accepted";
}

Value("sample string", 5); // "Not a valid index."
Value("another string", 2); // "Your value of another string was accepted"
```
