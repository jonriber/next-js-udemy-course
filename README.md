# next-js-udemy-course

Projects from the Udemy course "Next JS: The complete developer´s guide"

Here I am inserting personal notes about my development, following the course from udemy.

Everything I found useful or what I am considering a huge change from the perspective of a React developer.

## Route file system

When developing in `next.js`, there is a slight difference when building routes. Basically, the structure inside the 
`app` folder from `src` along with a specific file named `page.tsx` is gonna tell next that we are building a route.

So, following this type of logic, it is easier to build nested routes using this folder = page system.


## imports

Another cool thing is that we can quickly reference files on other folders by simply using reserved `@` key.

    import Header from "@/components/header";

It doesn´t matter if I am using this inside a deeply nested page/route inside my app folder, as long as I use this 
logic, we still have access to the desired component, on this case, the `header`.