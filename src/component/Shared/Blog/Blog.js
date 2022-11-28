import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center my-2">Most important four question</h2>

                    <div className="space-y-4 text-lg font-semibold">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> What are the different ways to manage a state in a React application?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">1)Local (UI) state – Local state is data we manage in one or another component.

                                Local state is most often managed in React using the useState hook. <br />
                                <span>2)Global (UI) state – Global state is data we manage across multiple components.

                                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</span>
                            </p>

                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.  </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                                Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;