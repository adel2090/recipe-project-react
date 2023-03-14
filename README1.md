#### Register a new user

```http
  POST /api/users/register
```

#### Login a user

```http
  POST /api/users/login
```

#### get all the users

```http
  GET /api/users/
```
#### get the user specific

```http
  GET /api/users/getuser/:id
```

#### For Information about a user

```http
  GET /api/users/userInfo
```
You will need to provide a token to get an answer from this api

#### forgot Password

```http
  POST /api/users/forgotpassword
```

#### Reset Password

```http
  POST /api/users/resetpassword/:token
```

#### For update a user

```http
  PATCH /api/users/updateUser
```
You will need to provide a token to get an answer from this api


#####################################################################

#### To receive all recipes

```http
  GET /api/recipes/recipes
```

#### To get a recipes specific 

```http
  GET /api/recipes/recipe/:id
```

#### To receive all recipes of the registered user

```http
  GET /api/recipes/myRecipes
```
You will need to provide a token to get an answer from this api

#### To create a new recipe

```http
  POST /api/recipes/
```
You will need to provide a token to get an answer from this api

#### To update a recipe

```http
  PATCH /api/recipes/:id
```
You will need to provide a token to get an answer from this api

#### To delete a recipe

```http
  DELETE /api/recipes/:id
```
You will need to provide a token to get an answer from this api