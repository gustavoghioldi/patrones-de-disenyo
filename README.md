# Patrones de diseño

## Historia

Un patrón de diseño es una manera de resolver un problema dentro de un contexto. En otras palabras, los patrones son plantillas para soluciones a problemas comunes en el desarrollo de software que se pueden usar en diferentes contextos.

Los patrones de diseño dan soluciones fáciles a problemas complejos sin importar el lenguaje que estemos usando.

Los patrones de diseño se clasifican en tres tipos diferentes dependiendo del tipo de problema que resuelven. Estos pueden ser:

- Creacionales 
- Estructurales
- De comportamiento

## Patrones creacionales
Su objetivo es resolver los problemas de creación de instancia. Estos ayudan a delegar responsabilidad de creación de objetos en situaciones necesarias.

Sus pilares fundamentales son encapsular el conocimiento de las clases y Ocultar cómo se crean y se instancian. Se subdividen a su vez así:


### Abstract Factory:
Permite proporcionar una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.
Suelen implemantarse con métodos de fabricación (Factory Method) o prototipos (Prototype) y suelen utilizarce como Sinleton
### Factory Method (Constructor virtual):
Nos ayuda a tener instancias de un objeto dado el tipo.
### Prototype (prototipo):
Clona las instancias ya existentes.
### Singleton:
(Instancia única): nos garantiza la existencia de una única instancia para una clase.

### Builder:
Ayuda a crear objetos complejos de manera sencilla, legible y escalable. Se utiliza en situaciones en las que debe construirse un objeto repetidas veces.

## Patrones estructurales
Su nombre es muy descriptivo, se ocupa de resolver problemas sobre la estructura de las clases, es decir, se enfocan en cómo las clases y objetos se componen para formar estructuras mayores.
### Bridge (Puente):
Separa la abstracción de la implementación. Estas pueden variar de forma independiente.
### Decorator (Decorador):
Agrega funcionalidades a una clase de forma dinámica.
### Adapter:(*)
Cuando dos clases no se entiende, el adapter es mediador y adapta una clase para que otra la entienda. Más fácil: Convierte la interfaz de una clase en otra interfaz que es la que se espera utilizar. 
### Composite:
Ayuda a construir objetos complejos a partir de otros más simples.
### Flyweight:
Se refiere a los objetos que queremos reutilizar para crear objetos más ligeros.
### Proxy:
Es un elemento que se encarga de introducir un nivel de acceso a una clase. Ese nivel de acceso puede ser por seguridad o por complejidad.
## Patrones de comportamiento
Nos ayuda a resolver problemas relacionados con el comportamiento de la aplicación. Ofrece soluciones respecto a la interacción y responsabilidad entre objetos y clases. Por ejemplo:

### Observer (Observador):
Un objeto le pasa el estado interno a muchos objetos que están interesados.

### Chain of Responsibility:
Simplifica las interconexiones de objetos.

### Command:
Separa acciones que pueden ser ejecutadas desde varios puntos diferentes de la aplicación a través de una interfaz sencilla.

### Iterator:
Este se utiliza en relación a objetos que almacenan colecciones de otros objetos.

### Mediator: **
Define un objeto que media entre otros objetos.
### Facade (Fachada):
Nos provee una interfaz unificada y simple para acceder a un sistema más complejo.
### Memento:
Se utiliza para restaurar el estado de un objeto a un estado anterior.

### State:
Permite a un objeto alterar su comportamiento cuando su estado interno cambia.

### Strategy:
Permite que un objeto tenga parte o todo su comportamiento definido en términos de otro objeto que sigue una interfaz particular.

### Template Method:
Se centra en la reutilización del código para implementar pasos para resolver problemas.

### Visitor:
Se utiliza para separar la lógica y las operaciones realizadas sobre una estructura compleja.

### atencion a estos!!
#### Mediator y Facade (Bhub)
#### Chain of Responsability en MOTU / Validator Service refactor Paygilant y en el modelo de handlers y middleware de Express
#### Factory (para instanciar mediante IoC implementaciones de Cache/DAOs/Message Broker ej. SNS/Kafka)
#### Singleton (todo lo referente a conexiones a bases de datos)
#### Command (Pepa Framework en el service template nuevo.
#### Observer Pattern Pub/Sub de PepaBus
#### Proxy 
