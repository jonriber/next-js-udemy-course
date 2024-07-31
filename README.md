# next-js Corp landing page application

Projects from the Udemy course "Next JS: The complete developer´s guide"

Here I am sharing personal notes about my development as I crash through the course.

Everything I found useful or what I am considering a huge change from the perspective of a `React developer`.

Production link to it: <https://corp-8g5gdqp9g-jonribers-projects.vercel.app>

## Route file system

When developing in `next.js`, there is a slight difference when building routes. Basically, the structure inside the 
`app` folder from `src` along with a specific file named `page.tsx` is gonna tell next that we are building a route.

So, following this type of logic, it is easier to build nested routes using this folder = page system.


## imports

Another cool thing is that we can quickly reference files on other folders by simply using reserved `@` key.

    import Header from "@/components/header";

It doesn´t matter if I am using this inside a deeply nested page/route inside my app folder, as long as I use this 
logic, we still have access to the desired component, on this case, the `header`.

## Images on Next.js

There is a specific `next` component called `Image` which helps us to enjoy the best of it. It is capable of automatically resize the image which is on target (src property). For example, let´s say we have just put a single image, a very large one. When compiling the page, next is gonna resize it according to the client need. A mobile version of our app does not need that very large image, so, `Image` component is taking care of this transformation on the background.

There is another shortcur which is to reference our `public` folder when importing things. It doesn´t matter if you
are working on a very nested page, just simply use:
    import homeImg from "/public/home.jpg";

### Image sizing

Layout shifting must be avoided. As a developer, we must think about it and consider slow speed or bad quality internet
connection.

Options for sizing the Image:

- Using a local image, dimensions are taken from the imported image
- Assign a height and width to the Image component
- Assign a `fill` prop, the image will expand to fill up the parent element

## Reusable components

This is the part where `React` comes in. The magic of props into components is what helps us to think about 
modularity and creating compoments that could be detached from each other, always thinking about abstraction.

So far, so good, nothing to fancy or kind of a new thing when compared to the way I used to do when developing a React
application.

## Deploy to Vercel

I already had vercel npm package installed on my computer, due to another project, but for documentation purpose:

- in your terminal run `npm install -g vercel`
- After completion, still in terminal, run `vercel`
- Log in to vercel (yes, you need to get a vercel account for it)
- A bunch of questions about deployment will start to appear, pick according to your project
- That´s pretty much it, a public link will be available if everything worked as expected