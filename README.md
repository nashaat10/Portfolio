Portfolio<a name="TOP"></a>
===================

# Description #
It's a personal portfolio that allows the user to change his data and update it using the API. It is built using Node.js, Express, MongoDB , Angular


# Features #

1. protected routes, authentication, authorization, security, and more.  
2. MVC architecture
3. RESTful API
4. CRUD operations
5. Advanced authentication and security
6. Advanced error handling
7. File uploading
8. Advanced MongoDB 
9. Advanced mongoose features
10. Image processing with sharp
11. And much more!
# APIs # 
Auth:
~~~
/api/v1/users/signup [POST]
/api/v1/users/login [POST]
~~~

Users:
~~~
/api/v1/users [GET] 
/api/v1/users/:id [GET]
/api/v1/users/:id [PATCH]  
/api/v1/users/:id [DELETE] 
/api/v1/users/me [GET]
/api/v1/users/updateMe [PATCH]
/api/v1/users/deleteMe [DELETE]
~~~

Experiences:
~~~
/api/v1/experiences [POST]
/api/v1/experiences [GET]
/api/v1/experiences/:id [GET]
/api/v1/experiences/:id [UPDATE]
/api/v1/experiences/:id [DELETE]
~~~
Projects
~~~
/api/v1/projects [GET]
/api/v1/projects [POST]
/api/v1/projects/:id [DELETE}
/api/v1/projects/:id [UPDATE]
~~~

# Usage # 

~~~
npm install
npm run build
npm start
~~~
