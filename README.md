<h2>Open Study College</h2>

Mihir Vaja - Front End Engineer Technical Task

This app has been built using Next.js, with GraphQL for getting the data from mock.shop API and SCSS to make styling easier.

In order to maintain the cart's status whilst browsing React Context has been used so that if more pages were to be added, the user could navigate through without losing progress.

Structurally styles have been introduced as modules for key components. For ease in the context of this task less elaborate components have just been styled at page level.

I have tried to keep the code as modular and reusable as possible, product cards can be reused elsewhere as can the entire product grid - and if the products are needed to be displayed in another format the raw data from getProducts can easily be fetched.

With more time improvements I'd like to make are:
<ul>
    <li>Add some form of UX response when adding to cart, currently it's not very clear the item has been added after clicking the button. Ideas I had were:
        <ul>
        <li>Having a micro animation of a circle animating from the cursor to the cart icon on click, with the cart pulsing when it lands - mimicking an actual shopping action</li>
        <li>Simply having the cart slide in as a sidebar so it's prominent you're in shopping mode and your bag is easily accessible</li>
    </ul>
    <li>Highlighting product cards - on hover or click it'd be nice to open the product up as a modal and show the full information and hero the product.</li>
    <li>Optimising imagery, currently they're way too big in raw size and are impacting page load time.</li>
    <li>Improving tabbing experience with focus elements highlighted for accessiblility.</li>
    <li>General refining
        <ul>
            <li>Cart could be a fixed height with a scrollbar so it doesn't get too long</li>
            <li>Adding responsive media queries for better scaling</li>
        </ul>
    </li>
</ul>

Thank you!
