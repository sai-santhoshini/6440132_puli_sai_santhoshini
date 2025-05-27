import java.lang.reflect.*;

public class ReflectionExample {
    public void sayHello(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("ReflectionExample");
        Method[] methods = clazz.getDeclaredMethods();

        System.out.println("Methods in ReflectionExample:");
        for (Method m : methods) {
            System.out.println(m.getName() + " with params: " + m.getParameterCount());
        }

        Object instance = clazz.getDeclaredConstructor().newInstance();
        Method sayHello = clazz.getDeclaredMethod("sayHello", String.class);
        sayHello.invoke(instance, "World");
    }
}
