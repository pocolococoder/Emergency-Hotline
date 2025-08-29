1.	What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
	 
Answer: Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll:
        getElementById("id") - Selects only one element by its unique id. Returns the element directly.

       getElementsByClassName("class") - Selects all elements with that class. Returns a live HTMLCollection (updates if DOM changes).

       querySelector("selector") - Selects the first element that matches a CSS selector (id, class, tag, etc.).

       querySelectorAll("selector") - Selects all elements that match a CSS selector. Returns a static NodeList (doesn’t auto-update).


       
2.    How do you create and insert a new element into the DOM?
  
Answer: Create an element - document.createElement("tag")
       Add content/attributes - element.textContent = "Hello"

       Insert into DOM - parent.appendChild(element)

    Example:
              let p = document.createElement("p");
              p.textContent = "This is a new paragraph";
              document.body.appendChild(p);
 .             
              
3.	What is Event Bubbling and how does it work?
	
Answer: Event bubbling is when an event on a child element first triggers on that element, then moves upward to its parent, grandparent, and so on until document.
            Example: Clicking a <button> inside a <div> also triggers the click event on the <div> unless stopped.
.

5. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation means attaching an event listener to a parent element instead of each child. The event bubbles up, and you check which child triggered it.
       Why useful?

       Uses fewer event listeners → better performance.

       Works for dynamically added elements.

  Example:

      document.querySelector("ul").addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
     console.log("Clicked on:", e.target.textContent);
      }
     });
.

5.    What is the difference between preventDefault() and stopPropagation() methods?
  
Answer: preventDefault() → Stops the default action of an element. Example: Prevent a link from opening - e.preventDefault();
stopPropagation() - Stops the event from bubbling up to parent elements. Example: Prevent a button click from also triggering the parent’s click - e.stopPropagation();

