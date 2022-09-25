abstract class Demo
{
    protected int a,b;
    public Demo(int a, int b)
    {
        this.a =a;
        this.b=b;
    }
    abstract int sum();
}

class trial extends Demo{

    public trial(int a,int b)
    {
        super(a,b);
    }
    int sum() {
        
        return a+b;
    }

    public static void main(String[] args) {
        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);
        trial t = new trial(a,b);
        System.out.println(t.sum());
    }
    
}