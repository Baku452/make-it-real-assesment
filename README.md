# Preguntas

## ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
1. Sprint Planning
2. Daily Scrum
3. Restrospectiva de Sprint
4. Sprint review

## ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
Son bocetos que representan visualmente la dsitribución de objetos y elementos del producto a desarrollar-
Se puede usar Balsaqmiq o Figma 

## Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
Var = Es una variable que puede variar y que su scope es local. Se puede usar cuando se quiere usar una variable a lo largo del documento.
Let = Es una variable que puede variar y su scope es de bloque. Se puede usar cuando se necesite usar variables en una funcion determinada o bloque for loop.
Const = Es una variable que no puede variar y su scope. Se puede usar para tener valores globales o crear funciones arrow.

## ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
git checkout -b rama-1
git branch rama-1

## Explicar la diferencia entre git merge y git rebase.
git merge: Mantiene el historial de commits al fusionarse con la rama principal, creando un commit de merge.
git rebase: No mantiene el historial de commmits al fusionar, reescribe el historial de commits de la rama principal, no crea un commmit de fusión.

## ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
Pull request : es la solicitud a un repositorio compartido para integrar cambios realizados
Git pull: es el comando para descargar y aplicar los cambios desde un repositorio remoto al repositorio local

## ¿Qué es el Virtual DOM?
Es una representación del DOM (Document Object Model) guardad en memoria, esto permite utilizar las ventajas de React con hooks y estados. El virtual DOMN interpreta estos cambios por hooks o estados para poder aplicarlos al real DOM, renderizando con menor latencia
