#include <iostream>
using namespace std;
class Complex
{
private:
    float real, imag;

public:
    Complex(float r = 0, float i = 0)
    {
        real = r;
        imag = i;
    }

    Complex operator/(Complex obj)
    {
        Complex res;
        res.real = (real * obj.real + imag * obj.imag) / (obj.real * obj.real + obj.imag * obj.imag);
        res.imag = (imag * obj.real - real * obj.imag) / (obj.real * obj.real + obj.imag * obj.imag);
        return res;
    }

    void input() { cout << "(real imag): ", cin >> real >> imag; }

    void print()
    {
        if (imag < 0)
        {
            cout << real << imag << "i";
        }
        else
            cout << real << " + i " << imag << endl;
    }
};
int main()
{
    Complex c1, c2;
    cout << "Enter First Complex number : ";
    c1.input();
    cout << "Enter second Complex number : ";
    c2.input();
    Complex c3 = c1 / c2;
    cout << endl
         << "Division of the given Complex number is: ";
    c3.print();
}