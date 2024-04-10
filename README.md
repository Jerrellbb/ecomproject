
---

# Ecommerce Site "Krep Konnect"

### Deployment Link: [Krep Konnect](https://myfirstecomproject-366f55c308fc.herokuapp.com/)


## Overview
This is a full-stack ecommerce site built using React for the front end and Python Django Rest Framework for the backend. The project is deployed on Heroku and utilizes Stripe as the payment gateway. The site allows users to sign up, log in, browse trainers, update their cart, and complete purchases securely through Stripe. Admin users have full CRUD functionality for trainers and can manage orders, including marking them as fulfilled.


### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Jerrellbb/ecomproject
   ```

2. **Install Python Dependencies using Pipenv:**
   ```bash
   pipenv install
   ```

3. **Activate the Virtual Environment:**
   ```bash
   pipenv shell
   ```

4. **Install JavaScript Dependencies:**
   ```bash
   npm install
   ```

5. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add necessary environment variables.

6. **Run Migrations:**
   ```bash
   python manage.py migrate
   ```

7. **Start the Development Servers:**
   - Start the Django backend server:
     ```bash
     python manage.py runserver
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```





## Usage

1. Sign up or log in to access the site.
2. Browse trainers, add them to your cart, and proceed to checkout.
3. Complete the purchase securely using Stripe. You can use the following fake/tester card details:
   - **Visa**: 4242 4242 4242 4242 (any 3 digits, any future date)
   - **Visa (debit)**: 4000 0566 5566 5556 (any 3 digits, any future date)
   - **Mastercard**: 5555 5555 5555 4444 (any 3 digits, any future date)
4. Admin users can manage trainers and orders from the admin dashboard.


## Technologies Used
- React
- Python Django Rest Framework
- Neon (Database)
- Stripe (Payment Gateway)
- Heroku (Deployment)

## File Structure
- `/client`: Contains the React front end code.
- `/`: Contains the Django backend code.
- `pipfile.txt`: Lists all Python dependencies.
- `package.json`: Lists all npm dependencies.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.



## Contact
For any questions or feedback, please contact [jerrellbb@yahoo.co.uk](mailto:jerrellbb@yahoo.co.uk).

--- 

