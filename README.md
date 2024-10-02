## Cozy Threads Write-up
[Deployed site](https://cozy-threads-ngio.onrender.com/)

### Overview
Cozy Threads is an ecommerce platform selling high-quality, ethically sourced apparel and accessories. The project includes a product catalog, shopping cart, and checkout using Stripe for payments. The backend is powered by Node.js and Express, with React managing the frontend. Sequelize is used for the SQLite database. Both frontend and backend are deployed as a single web service on Render, simplifying deployment and reducing complexity. Stripe handles secure payments.


### Architecture
- Frontend: Built with React, it offers a responsive UI that interacts with the backend via API calls. React Router manages client-side routing, while React Context manages the shopping cart. The static files from the React build are served by Express.
- Backend: The backend, built with Express, serves both the API and frontend. It provides API endpoints for fetching product data and initiating Stripe checkout sessions. Sequelize manages the SQLite database, seeded during deployment, and integrates Stripe to create secure payment sessions.


### Key Features
- Product Catalog: The frontend fetches product data from the API and displays it in the catalog. Product data is stored in SQLite and seeded on deployment. Products can be searched for by name or description from the home page. 
- Shopping Cart: The cart state is managed via React Context and persisted in local storage. Future iterations could implement user authentication to manage carts on the backend. Users can modify the quantity of added items, remove items from the cart, and view the total price. 
- Checkout with Stripe: Stripe’s Checkout API handles payments. Upon successful payment, users are redirected to a success page. Sensitive data like the Stripe secret key is managed via environment variables.


### Trade-offs and Challenges
- SQLite for Development: SQLite was selected for its simplicity and ease of use during development. However, since Render’s filesystem is ephemeral, all data is lost between deployments. For a production-grade application, a persistent database such as PostgreSQL or MySQL would be more appropriate to ensure long-term data storage.
- Single Web Service Deployment: Initially, the frontend and backend were deployed as separate services, which added complexity in managing inter-service communication and deployments. By merging both frontend and backend into a single Express service, the deployment process was simplified. However, this approach can increase the server load since it now handles both API requests and static file serving, but since it’s a small application this is fine.


### Areas for Improvement
- Error Handling and UX Improvements: More detailed error messages and loading indicators during checkout would improve the user experience.
- UI/Design Enhancements: Adding individual product pages, size selection, and filtering options (ex. Item type) would improve the shopping experience. Adding an autocomplete dropdown for the search bar would be nice as well. User accounts to keep track of shipping info/order history, as well as targeted promotions/sales. 
- Responsiveness: Better small screen experience and infinite scrolling on the product page would enhance site responsiveness.
- Backend Enhancements: Implementing user authentication would allow carts to persist across devices and sessions.
Stripe Webhooks: Webhooks could automate order fulfillment, refunds, and payment status updates.


### Conclusion
Cozy Threads provides a solid foundation for an ecommerce platform. Future improvements, such as persistent databases, user authentication, better error handling, overall design improvements, and the integration of Stripe webhooks, would increase the application’s scalability, security, and user-friendliness.


