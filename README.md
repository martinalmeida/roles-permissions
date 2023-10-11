# roles-permissions

This is a system made in Laravel 10 for the administration and creation of users with roles and permissions to modules or pages dynamically, incorporating vue.js 3 and tailwind 3.

### Clone the repository:

Start by cloning this repository on your local machine.

```bash
git clone https://github.com/martinalmeida/roles-permissions.git
```

### Install dependencies:

Use Composer to install PHP dependencies and npm for JavaScript dependencies. Ensure you have Composer and npm installed on your system.

```sh
composer install
```

```sh
npm install
```

### Configure the environment file:

Copy the .env.example file to .env and configure the environment variables, including database settings and application keys.

```sh
cp .env.example .env
```

### Generate an application key:

Run the following command to generate a new application key:

```sh
php artisan key:generate
```

### Run migrations:

Create the necessary database tables by running migrations:

```sh
php artisan migrate
```

### Start the development server:

Use the following command to start a development server:

```sh
php artisan serve
```

The application will be accessible at http://localhost:8000.

### Compile assets:

Compile JavaScript and CSS assets with the following command:

```sh
npm run dev
```
